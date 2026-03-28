# Zeze Hub Project Overview
Zeze Hub is a comprehensive decision-making platform that provides various tools like Magic Lamp, Coin Flip, Dice, and more to help users overcome decision fatigue. It also features a series of "Decision Insights" articles that provide psychological context and tips for better decision-making.

## Implemented Features
- **Magic Lamp:** Yes/No answers based on categories (Food, Love, Money, etc.).
- **3D Coin Flip:** Heads or Tails with 3D physics.
- **Dice of Destiny:** Custom dice for multiple choices.
- **Ladder Climb:** Fair role assignment and betting.
- **Team Maker:** Fairly divides teams.
- **Card Flip & Time Bomb:** High-tension games for fun and decision-making.
- **Daily Fortune:** A word of wisdom once a day.
- **Decision Insights:** A blog section with 18 articles on psychology and decision-making.
- **I18n:** Full support for Korean and English.

## Current Update: Fixed Language Switching in "Decision Insights"
- Fixed a bug where the "Decision Insights" articles would not switch language correctly due to a syntax error in the `applyLanguage` function (an extra `});` ending the function prematurely).
- Fixed 18 article files in the `insights/` directory:
    - ai-decision-making.html
    - cognitive-biases-in-choices.html
    - crypto-randomness.html
    - daily-fortune-philosophy.html
    - decision-fatigue.html
    - fairness-science.html
    - gamification-of-daily-life.html
    - group-decision-strategies.html
    - heuristics-and-biases.html
    - history-of-divination.html
    - history-of-games-of-chance.html
    - luck-vs-probability.html
    - lunch-menu-tips.html
    - mbti-decisions.html
    - mindfulness-and-decisions.html
    - paradox-of-choice.html
    - psychology-of-luck.html
    - regret-management.html
- Added missing article titles and descriptions for the main hub page in `main.js` so they switch correctly.
- Robust implementation of `applyLanguage` across the blog files that handles both simple and array-based summary content.

## Current Update: Step 2 - Guide and Info Pages
- **Detailed Tool Guide (`hub-guide.html`)**: Added detailed real-life use cases for tools:
    - Choosing lunch menu with Coin Flip (psychological trick).
    - Fair betting rules with Ladder Climb.
    - Team building know-how using Random Team Maker.
    - Quick tips for Magic Lamp and Time Bomb.
- **About Page (`about.html`)**: Detailed introduction to Zeze Hub's philosophy, technical transparency (Web Crypto API), and mission to reduce decision fatigue.
- **Multilingual Support**: Both pages now include full Korean and English translations directly in the HTML file for fast loading and SEO.
- **UI Enhancements**: Added language toggles (KO/EN) to the navigation bars of all guide and info pages.
