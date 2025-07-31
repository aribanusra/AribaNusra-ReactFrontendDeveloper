# 🌈 StyleSphere – Multi-Theme React App

Live Demo 👉 [ariba-nusra-react-frontend-developer.vercel.app](https://ariba-nusra-react-frontend-developer.vercel.app)

A responsive React + TypeScript app with **Theme Switching**, **Tailwind CSS styling**, and **React Router**. Users can switch between 3 elegant themes — Minimalist, Dark, and Colorful — each with its own layout, font, and color scheme.

---

## ✨ Features

- 🔁 Dynamic Theme Switching (stored in localStorage)
- 🎨 Three Unique Themes:
  - Minimalist (Light, clean, sans-serif)
  - Dark Mode (Dark background, sidebar layout)
  - Colorful (Bright, card-based layout with Pacifico font)
- 📱 Responsive Layout
- 🌐 Routing with React Router (`Home`, `About`, `Contact`)
- ⚡️ Built with Vite for fast performance
- 💅 Styled with Tailwind CSS
- 💾 Theme persistence with Context API + localStorage


---

## 🚀 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 🧠 Folder Structure

```bash
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── HamburgerMenu.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ariba-nusra-react-theme-switcher.git
   ```
2. **Navigate to the project folder**
   ```bash
   cd AribaNusra-ReactFrontendDeveloper
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Start the dev server**
   ```bash
   npm run dev
   ```

---

## 🎮 How to Use

- **Theme Switching:**
  - Use the theme dropdown in the sidebar (or header, depending on screen size and theme) to switch between Minimalist, Dark Sidebar, and Colorful themes.
  - Your selected theme is saved and will persist on reload.
- **Navigation:**
  - Use the navigation links to switch between Home, About, and Contact pages.
- **Product Cards:**
  - The Home page fetches and displays products from the [Fake Store API](https://fakestoreapi.com/). This is always enabled for demo purposes.

---

## 🖼️ API Usage

- The Home page fetches up to 16 products from the [Fake Store API](https://fakestoreapi.com/). No API key is required.
- If the API is unavailable, an error will be logged in the console and the product grid will be empty.

---



## 👩‍💻 Author

**Ariba Nusra**  
Frontend Developer  
[LinkedIn](https://www.linkedin.com/) | [GitHub](https://github.com/)
