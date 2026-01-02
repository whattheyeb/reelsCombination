/**
 * Analysis Engine
 * Determines personality type based on Reels data and Questionnaire answers.
 */

const PERSONALITIES = {
    dopamine_chaser: {
        name: "The Dopamine Chaser",
        headline: "You're here for a good time, not a long time.",
        description: "Your feed is a chaotic mix of memes, fails, and high-energy content. you scroll fast, laugh loud, and probably send 50 reels a day to your best friend.",
        illustration: "🎭",
        bullets: [
            "Short attention span (but in a fun way)",
            "Meme connoisseur",
            "Always knows the latest trends"
        ]
    },
    aesthetic_curator: {
        name: "The Aesthetic Curator",
        headline: "Your feed is basically an art gallery.",
        description: "You love sunsets, lo-fi beats, and satisfying visuals. For you, Reels are a way to decomporess and find inspiration. Your saved collection is immaculate.",
        illustration: "✨",
        bullets: [
            "Visuals > Audio",
            "Likely to have a 'Reels' moodboard",
            "Appreciates slow living content"
        ]
    },
    life_hacker: {
        name: "The Life Hacker",
        headline: "You're optimizing your life, one minute at a time.",
        description: "Coding tips, finance advice, or gym workouts—if it doesn't teach you something, you scroll past. You treat Instagram like a second university.",
        illustration: "🧠",
        bullets: [
            "Saves way more than likes",
            "Actually tries the recipes",
            "Productivity obsessed"
        ]
    },
    social_butterfly: {
        name: "The Social Butterfly",
        headline: "You watch to connect.",
        description: "Vlogs, deeply relatable content, and POV videos dominate your feed. You care about people's stories and often tag friends saying 'literally us'.",
        illustration: "🦋",
        bullets: [
            "Empathy driven",
            "loves 'POV' content",
            "The friend group's hype person"
        ]
    }
};

export const analyzeProfile = (reelsData, answers) => {
    // 1. Scoring Map
    let scores = {
        dopamine_chaser: 0,
        aesthetic_curator: 0,
        life_hacker: 0,
        social_butterfly: 0
    };

    // 2. Analyze Answers
    // Q1: Time
    if (answers.Q1 === 'night_owl') scores.dopamine_chaser += 2;
    if (answers.Q1 === 'busy_bee') scores.life_hacker += 2;

    // Q2: Content Memory
    if (answers.Q2 === 'humor') scores.dopamine_chaser += 3;
    if (answers.Q2 === 'aesthetic') scores.aesthetic_curator += 3;
    if (answers.Q2 === 'learning') scores.life_hacker += 3;
    if (answers.Q2 === 'social') scores.social_butterfly += 3;

    // Q3: Reaction
    if (answers.Q3 === 'sharer') scores.social_butterfly += 2;
    if (answers.Q3 === 'active') scores.aesthetic_curator += 1; // Curators save/like

    // Q4: Why Like?
    if (answers.Q4 === 'visuals') scores.aesthetic_curator += 2;
    if (answers.Q4 === 'relatability') scores.social_butterfly += 2;


    // 3. Analyze Reels Metadata (Mock)
    if (reelsData) {
        reelsData.forEach(reel => {
            const tags = (reel.tags || []).join(' ').toLowerCase();

            if (tags.includes('meme') || tags.includes('funny')) scores.dopamine_chaser += 1;
            if (tags.includes('aesthetic') || tags.includes('sunset')) scores.aesthetic_curator += 1;
            if (tags.includes('learn') || tags.includes('tips')) scores.life_hacker += 1;
            if (tags.includes('vlog') || tags.includes('daily')) scores.social_butterfly += 1;
        });
    }

    // 4. Find Winner
    let winner = 'dopamine_chaser'; // Default
    let maxScore = -1;

    Object.entries(scores).forEach(([key, score]) => {
        if (score > maxScore) {
            maxScore = score;
            winner = key;
        }
    });

    console.log("Analysis Scores:", scores);
    return PERSONALITIES[winner];
};
