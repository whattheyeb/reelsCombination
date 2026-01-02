/**
 * State Management for Reels Personality Analyzer
 */

const state = {
    currentStep: 'home', // home, consent, login, questions, analyzing, result
    
    user: {
        isAuthenticated: false,
        profile: null
    },

    reelsData: null, // To store metadata fetched from "Instagram"
    
    answers: {}, // Q1: '...', Q2: '...'
    
    result: null // Final computed personality
};

// Simple event bus for state changes
const listeners = [];

export const subscribe = (listener) => {
    listeners.push(listener);
};

const notify = () => {
    listeners.forEach(fn => fn(state));
};

// Actions
export const setStep = (stepName) => {
    state.currentStep = stepName;
    notify();
};

export const setUser = (userProfile) => {
    state.user.isAuthenticated = true;
    state.user.profile = userProfile;
    notify();
};

export const setReelsData = (data) => {
    state.reelsData = data;
    // ensure we don't trigger a full rerender if not needed, but here simple is fine
    notify();
};

export const saveAnswer = (questionId, answerValue) => {
    state.answers[questionId] = answerValue;
    notify();
};

export const setResult = (resultData) => {
    state.result = resultData;
    notify();
};

export const resetState = () => {
    state.currentStep = 'home';
    state.user = { isAuthenticated: false, profile: null };
    state.reelsData = null;
    state.answers = {};
    state.result = null;
    notify();
};

export const getState = () => state;
