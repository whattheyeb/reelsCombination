# 📱 인스타그램 릴스 성격 분석기 (Reels Personality Analyzer)

새벽 3시까지 릴스를 보고 계신가요? 이 웹사이트는 여러분이 좋아요를 누른 릴스와 시청 습관을 분석하여 여러분의 숨겨진 성격을 알려줍니다.

## ✨ 주요 기능

*   **🧠 심리 분석 알고리즘**: 시청 시간, 콘텐츠 유형, 반응 방식을 기반으로 성격을 분석합니다.
*   **🎭 4가지 독특한 성격 유형**:
    *   **도파민없이 못살아**: 짧고 강렬한 재미를 원함, 밈(Meme) 중독.
    *   **✨ 감성 뿜뿜**: 분위기, 무드보드, 시각적 스토리텔링 중시.
    *   **🧠 갓생 추구자**: 자기계발, 정보 습득, 효율성 추구.
    *   **🦋 리틀 인플루언서**: 친구들과의 소통, 공유를 즐김.
*   **🔒 철저한 프라이버시**: 모든 분석은 시뮬레이션으로 브라우저 내에서 로컬로 실행됩니다. 개인 데이터는 저장되거나 인스타그램으로 전송되지 않습니다.

## 🛠️ 기술 스택

*   **Frontend**: HTML5, CSS3 (Custom properties, Flexbox/Grid)
*   **Logic**: Vanilla JavaScript (ES6+ Modules)
*   **Tooling**: Vite 

## 🚀 시작하기 (Getting Started)

### 필수 조건

*   Node.js가 설치되어 있어야 합니다.

### 설치 및 실행

1.  저장소를 복제(Clone)하거나 다운로드합니다.
2.  의존성 패키지를 설치합니다:

```bash
npm install
```

3.  개발 서버를 실행합니다:

```bash
npm run dev
```

4.  브라우저에서 `http://localhost:5173` (또는 터미널에 표시된 주소)를 엽니다.

---

# 📱 Reels Personality Analyzer

Ever wondered what your 3AM doom-scrolling says about you? This application analyzes your Instagram Reels viewing habits—from the memes you share to the aesthetics you save—to reveal your true digital personality.

## ✨ Features

*   **🧠 Psychometric Analysis**: Algorithm that determines your personality based on viewing time, content type, and engagement style.
*   **🎭 4 Unique Archetypes**:
    *   **The Dopamine Chaser**: Fast laughs, chaos, and meme culture.
    *   **✨ The Aesthetic Curator**: Vibes, moodboards, and visual storytelling.
    *   **🧠 The Life Hacker**: Optimization, learning, and self-improvement.
    *   **🦋 The Social Butterfly**: Connection, relatability, and sharing.
*   **🔒 Privacy First**: All analysis is simulated and runs locally in your browser. No personal data is actually stored or sent to Instagram.

## 🛠️ Tech Stack

*   **Frontend**: HTML5, CSS3 (Custom properties, Flexbox/Grid)
*   **Logic**: Vanilla JavaScript (ES6+ Modules)
*   **Tooling**: Vite (Fast development server & bundler)

## 🚀 Getting Started

### Prerequisites

*   Node.js installed on your machine.

### Installation

1.  Clone the repository (or download the source code).
2.  Install dependencies:

```bash
npm install
```

3.  Start the development server:

```bash
npm run dev
```

4.  Open your browser at `http://localhost:5173` (or the URL shown in the terminal).

## 📂 Project Structure

*   `index.html`: Single-page application structure and view management.
*   `css/`: Global styles, variables, and responsive design.
*   `js/`:
    *   `app.js`: Main entry point and UI controller.
    *   `questions.js`: Configuration for psychological questions.
    *   `analysis-engine.js`: Logic for calculating personality scores.
    *   `instagram-service.js`: Mock service for simulating Instagram login and data fetching.
