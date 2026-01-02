/**
 * Mock Instagram Service
 * 
 * Simulates OAuth login and retrieving user's liked Reels.
 * In a real app, this would interact with the Instagram Basic Display API.
 */

// Mock Data Generators
const HASHTAG_POOLS = {
    funny: ['#memes', '#funny', '#relatable', '#lol', '#comedy', '#fails'],
    aesthetic: ['#aesthetic', '#vibes', '#sunset', '#travel', '#cinematic', '#nature', '#art'],
    learning: ['#tips', '#howto', '#learn', '#education', '#lifehacks', '#coding', '#finance'],
    cats: ['#cats', '#catsofinstagram', '#kitten', '#meow', '#cute'],
    fitness: ['#fitness', '#gym', '#workout', '#health']
};

/**
 * Simulate Login Delay
 */
export const login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: '123456789',
                username: 'mock_user_vibes',
                full_name: 'Vibe Checker'
            });
        }, 2000); // 2 second delay to feel like a "process"
    });
};

/**
 * Simulate Fetching Liked Reels
 * Returns a list of mock media objects
 */
export const fetchLikedReels = () => {
    return new Promise((resolve) => {
        // Generate random mix of content
        const reels = [];
        const count = 20; // Analyze last 20 likes

        for (let i = 0; i < count; i++) {
            const types = Object.keys(HASHTAG_POOLS);
            const type = types[Math.floor(Math.random() * types.length)];

            reels.push({
                id: `media_${i}`,
                type: 'VIDEO', // assume reel
                timestamp: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
                caption: `Some caption... ${getRandomTags(type)}`,
                tags: HASHTAG_POOLS[type], // Explicit tags for easier analysis
                category_hint: type
            });
        }

        setTimeout(() => {
            resolve(reels);
        }, 1500);
    });
};

function getRandomTags(type) {
    const pool = HASHTAG_POOLS[type];
    // Pick 2 random tags
    return `${pool[Math.floor(Math.random() * pool.length)]} ${pool[Math.floor(Math.random() * pool.length)]}`;
}
