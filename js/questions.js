export const questions = [
    {
        id: "Q1",
        question: {
            en: "When do you usually watch Instagram Reels?",
            ko: "보통 언제 인스타그램 릴스를 보시나요?"
        },
        options: [
            { text: { en: "Late at night", ko: "늦은 밤 침대에서" }, value: "night_owl" },
            { text: { en: "During breaks or commuting", ko: "이동하거나 쉬는 시간에 틈틈이" }, value: "busy_bee" },
            { text: { en: "Randomly throughout the day", ko: "하루 종일 수시로" }, value: "always_online" },
            { text: { en: "Almost never consciously (it just happens)", ko: "나도 모르게 정신 차려보면 보고 있음" }, value: "zombie_scroller" }
        ]
    },
    {
        id: "Q2",
        question: {
            en: "What kind of Reels do you remember most?",
            ko: "가장 기억에 남는 릴스는 어떤 종류인가요?"
        },
        options: [
            { text: { en: "Very funny or meme-like videos", ko: "엄청 웃기거나 밈(Meme) 같은 영상" }, value: "humor" },
            { text: { en: "Calm, aesthetic, or emotional videos", ko: "차분하고 감성적이거나 힐링되는 영상" }, value: "aesthetic" },
            { text: { en: "Informative or skill-based videos", ko: "정보나 새로운 기술을 알려주는 영상" }, value: "learning" },
            { text: { en: "Short daily-life or vlog-style videos", ko: "짧은 일상 브이로그나 사람 사는 이야기" }, value: "social" }
        ]
    },
    {
        id: "Q3",
        question: {
            en: "How do you usually react after watching a Reel you like?",
            ko: "마음에 드는 릴스를 보면 어떻게 하시나요?"
        },
        options: [
            { text: { en: "I immediately like or save it", ko: "바로 좋아요를 누르거나 저장한다" }, value: "active" },
            { text: { en: "I send it to someone", ko: "친구에게 DM으로 보낸다" }, value: "sharer" },
            { text: { en: "I just keep scrolling", ko: "그냥 계속 스크롤한다" }, value: "passive" },
            { text: { en: "I think about it later", ko: "나중에 그 내용이 생각난다" }, value: "deep" }
        ]
    },
    {
        id: "Q4",
        question: {
            en: "Why do you think you press the like button?",
            ko: "주로 어떤 이유로 '좋아요'를 누르시나요?"
        },
        options: [
            { text: { en: "Because it matches my sense of humor", ko: "내 개그 코드랑 딱 맞아서" }, value: "relatability" },
            { text: { en: "Because it feels relatable", ko: "완전 내 얘기 같아서 공감돼서" }, value: "empathy" },
            { text: { en: "Because it looks visually pleasing", ko: "영상이 예쁘고 감각적이어서" }, value: "visuals" },
            { text: { en: "I'm not really sure", ko: "잘 모르겠다, 습관적으로?" }, value: "impulse" }
        ]
    }
];
