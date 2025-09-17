# CVBot Frontend

A modern, user-friendly frontend for the [CVBot application](https://github.com/ikok07/cvbot-backend.git), built to provide seamless interaction with the AI-powered personal assistant backend. The frontend enables users to interact with the AI chatbot and access professional profile information through an intuitive interface.

**🚀 Features**

- Interactive UI: Built with Next.js 15 and shadcn/ui components for a sleek, responsive design.
- Multilingual Support: Internationalization (i18n) powered by Next-Intl, supporting English (en) and Bulgarian (bg).
- Secure Authentication: Clerk integration for robust user authentication.
- AI Chatbot: Real-time interaction with the AI-powered chatbot for professional queries.
- Responsive Design: Optimized for both desktop and mobile devices.

**🛠️ Tech Stack**

- Framework: Next.js 15 (App Router)
- UI Components: shadcn/ui (built on Tailwind CSS and Radix UI)
- Internationalization: Next-Intl
- Authentication: Clerk
- Styling: Tailwind CSS
- Language: TypeScript
- API Client: Fetch API for communicating with the CVBot Backend

**🌎 Internationalization**

Next-Intl provides multi-language support with locale switching for English (en) and Bulgarian (bg).

Translations are managed in JSON files under the /messages directory (en.json and bg.json).

**🔐 Security (Currently Only for token generation)**

Authentication: Clerk ensures secure user authentication with OAuth and JWT-based sessions.

**💻 Installation**

1. Clone the repository `git clone <repository-url>`
2. Navigate to project's folder `cd cvbot-frontend`
3. Install dependencies `npm install`
4. Copy `.env.example` to `.env` and configure the required environment variables

**👨‍💻 Author**

Originally built by Kaloyan Stefanov.

**🔗 Backend**

This frontend is designed to work with the [CVBot Backend](https://github.com/ikok07/cvbot-backend.git). Ensure the backend is running and accessible at the configured NEXT_PUBLIC_BACKEND_URL.