import * as State from './state.js';
import * as InstagramService from './instagram-service.js';
import * as Questions from './questions.js';
import * as AnalysisEngine from './analysis-engine.js';

// DOM Elements
const views = {
    home: document.getElementById('view-home'),
    consent: document.getElementById('view-consent'),
    login: document.getElementById('view-login'),
    questions: document.getElementById('view-questions'),
    analyzing: document.getElementById('view-analyzing'),
    result: document.getElementById('view-result')
};

/**
 * Initialize Application
 */
function init() {
    // Initial Render
    render(State.getState());

    // Subscribe to state changes
    State.subscribe(render);

    // Bind Global Events
    bindEvents();
}

/**
 * Handle State Updates & Render View Transitions
 */
function render(state) {
    // 1. Manage View Visibility
    Object.keys(views).forEach(key => {
        const el = views[key];
        if (key === state.currentStep) {
            el.classList.remove('hidden');
            // Small delay to allow display:block to apply before adding opacity class
            requestAnimationFrame(() => {
                el.classList.add('active');
            });
        } else {
            el.classList.remove('active');
            // Wait for transition to finish before hiding
            setTimeout(() => {
                if (key !== State.getState().currentStep) { // Check if still not active
                    el.classList.add('hidden');
                }
            }, 300); // matches CSS var --trans-speed
        }
    });

    // 2. Specific View Updates
    if (state.currentStep === 'questions') {
        renderQuestionFlow(state);
    }

    if (state.currentStep === 'result' && state.result) {
        renderResult(state.result);
    }
}

/**
 * Render Question Flow
 * Show one question at a time based on answered count.
 */
function renderQuestionFlow(state) {
    const container = document.getElementById('question-container');
    const progressBar = document.getElementById('question-progress');

    // Determine which question to show
    const currentQuestionIndex = Object.keys(state.answers).length;

    // Update progress
    const progress = (currentQuestionIndex / Questions.questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    if (currentQuestionIndex >= Questions.questions.length) {
        // All done, trigger analysis
        if (state.currentStep === 'questions') { // Guard against double call
            triggerAnalysis();
        }
        return;
    }

    const q = Questions.questions[currentQuestionIndex];

    // Render Question
    container.innerHTML = `
        <div class="question-card fade-in">
            <h3>${q.question}</h3>
            <div class="options-list">
                ${q.options.map(opt => `
                    <button class="option-btn" data-qid="${q.id}" data-val="${opt.value}">
                        ${opt.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    // Bind Option Clicks (temporary listener for this render)
    container.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const qid = e.target.closest('.option-btn').dataset.qid || e.target.dataset.qid;
            const val = e.target.closest('.option-btn').dataset.val || e.target.dataset.val;

            // UI Feedback
            e.target.style.background = 'var(--primary)';
            e.target.style.color = 'white';

            setTimeout(() => {
                State.saveAnswer(qid, val);
            }, 300);
        });
    });
}

/**
 * Run Analysis
 */
function triggerAnalysis() {
    State.setStep('analyzing');

    // Simulate thinking time + run logic
    setTimeout(() => {
        const result = AnalysisEngine.analyzeProfile(State.getState().reelsData, State.getState().answers);
        State.setResult(result);
        State.setStep('result');
    }, 2500);
}

/**
 * Render Final Result
 */
function renderResult(result) {
    document.getElementById('result-title').innerText = result.name;
    document.getElementById('result-illustration').innerText = result.illustration;
    document.getElementById('result-description').innerText = result.description;

    const bulletsHtml = result.bullets.map(b => `<li>${b}</li>`).join('');
    document.getElementById('result-bullets').innerHTML = bulletsHtml;
}

/**
 * Bind Click Listeners etc.
 */
function bindEvents() {
    // Home -> Consent
    document.getElementById('btn-start').addEventListener('click', () => {
        State.setStep('consent');
    });

    // Back Buttons
    document.getElementById('btn-back-home').addEventListener('click', () => {
        State.setStep('home');
    });

    // Consent -> Login
    document.getElementById('btn-consent-login').addEventListener('click', async () => {
        State.setStep('login');

        try {
            // 1. Login
            const user = await InstagramService.login();
            State.setUser(user);

            // 2. Fetch Data (mock)
            // In a real app we might do this now or later. 
            // Doing it now keeps the analysis step pure computation.
            const reels = await InstagramService.fetchLikedReels();
            State.setReelsData(reels);

            // 3. Move to Questions
            State.setStep('questions');

        } catch (error) {
            console.error("Login failed", error);
            alert("Failed to connect to Instagram (Simulation). Try again.");
            State.setStep('consent'); // Go back
        }
    });

    // Result -> Restart
    document.getElementById('btn-restart').addEventListener('click', () => {
        State.resetState();
    });
}

// Start
init();
