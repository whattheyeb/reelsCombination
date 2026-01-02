/**
 * Analysis Engine
 * Determines personality type based on Reels data and Questionnaire answers.
 */

const PERSONALITIES = {
    dopamine_chaser: {
        id: "dopamine_chaser",
        illustration: "🎭"
    },
    aesthetic_curator: {
        id: "aesthetic_curator",
        illustration: "✨"
    },
    life_hacker: {
        id: "life_hacker",
        illustration: "🧠"
    },
    social_butterfly: {
        id: "social_butterfly",
        illustration: "🦋"
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
