# Borhan Uddin - Personal GitHub Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live_Demo-code.wapborhan.com-ff014f?style=for-the-badge&logo=google-chrome&logoColor=white)](https://code.wapborhan.com/)
[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

A modern, responsive personal developer portfolio web application powered by **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS v4**, automatically populated via the **GitHub REST API**. Designed with the sleek **Inbio Neomorphic** UI theme and deployed as a static export on **GitHub Pages** at [code.wapborhan.com](https://code.wapborhan.com/).

---

## ✨ Key Features

- **⚡ Next.js 14 App Router & Static Export**: 100% pre-rendered static HTML/CSS/JS export for ultra-fast load times on GitHub Pages.
- **🎨 Tailwind CSS v4**: Built with the latest CSS-first Tailwind engine without preflight interference to maintain neomorphic shadows, gradients, and custom themes.
- **🌓 Dark & Light Theme**: Seamless toggle between dark and white neomorphic versions with smooth transitions.
- **📱 Fully Responsive Design**:
  - Full desktop navigation tabs for large screens.
  - Dedicated fixed bottom navigation bar with icons on mobile and tablet (`≤ 991px`).
- **📊 Real-time GitHub Data**:
  - **Overview**: Live rendering of GitHub Profile README via Markdown preview.
  - **Repositories**: Paginated repository grid (12 projects per page) with language badges, live demo links, star count, and fork count.
  - **Starred Projects**: Fetches and paginates starred repositories with seamless URL query tracking (`?page=X`).
  - **Followers & Following**: Compact, responsive profile cards linking directly to GitHub profiles and repositories.
- **🚥 Top-Border Progress Loader**: Smooth left-to-right filling progress bar during page navigation.
- **🛡️ Rate-Limit Fallback**: Smart Axios interceptor that gracefully handles GitHub token limits and retries unauthenticated requests without throwing errors.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 14](https://nextjs.org/)** | React Framework & App Router static export |
| **[TypeScript](https://www.typescriptlang.org/)** | Type safety and GitHub API interface definitions |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Utility-first styling & modern CSS theme engine |
| **[React Icons](https://react-icons.github.io/react-icons/)** | Scalable vector icons |
| **[@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview)** | GitHub README Markdown renderer |
| **[Axios](https://axios-http.com/)** | GitHub REST API client with fallback interceptor |
| **[GitHub Actions](https://github.com/features/actions)** | Automated CI/CD deployment to GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.17 or higher recommended; v20 LTS preferred)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/wapborhan/wapborhan.github.io.git
   cd wapborhan.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional):**
   Create a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_GIT_TOKEN=your_github_personal_access_token_here
   ```
   *(A personal access token increases the GitHub API rate limit from 60 to 5,000 requests per hour. The application functions cleanly even without a token).*

4. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `localhost:3000` |
| `npm run build` | Compiles and generates static export inside `out/` |
| `npm start` | Runs Next.js production server locally |
| `npm run deploy` | Builds static site and pushes `out/` to the `gh-pages` branch |

---

## 🌐 Deployment to GitHub Pages

### Method 1: GitHub Actions (Recommended)

This repository includes an automated workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Push changes to the `main` branch. GitHub Actions will automatically build and deploy the site.

### Method 2: Manual Deploy via CLI

Deploy directly to the `gh-pages` branch from your terminal:
```bash
npm run deploy
```

---

## 📁 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   ├── .nojekyll               # Disables Jekyll processing on GitHub Pages
│   ├── CNAME                   # Custom domain (code.wapborhan.com)
│   ├── favicon.ico             # Site favicon
│   ├── robots.txt              # Search engine directives
│   └── images/                 # Optimized static assets
├── src/
│   ├── app/                    # Next.js 14 App Router routes
│   │   ├── globals.css         # Tailwind CSS v4 selective imports & theme
│   │   ├── layout.tsx          # Root HTML layout & global context providers
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── page.tsx            # Home page route
│   │   ├── overview/           # Overview route
│   │   ├── repo/               # Repositories route with pagination
│   │   ├── followers/          # Followers route
│   │   ├── following/          # Following route
│   │   └── starred/            # Starred repositories route
│   ├── assets/
│   │   └── css/                # Inbio core styles & custom responsive rules
│   ├── components/             # Reusable UI components (Banner, Footer, Preloader, RightDemo)
│   ├── context/                # React Context for GitHub data & loading states
│   ├── types/                  # TypeScript interfaces for GitHub API
│   ├── util/                   # Axios instance with auto-fallback interceptor
│   └── views/                  # View components and shimmer skeleton loaders
├── next.config.mjs             # Next.js static export & trailingSlash config
├── postcss.config.js           # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json               # TypeScript configuration
└── LICENSE                     # MIT License
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

Copyright (c) 2022-2026 **Md. Borhan Uddin (WapBorhan)**
