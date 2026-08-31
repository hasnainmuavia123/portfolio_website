# Hasnain Muavia — AI Engineer Portfolio Website

A professional, high-performance personal portfolio website built with a modern dark luxury aesthetic (`#08080c` base with warm amber `#ff6a00` → `#ff9a3d` gradient accents, glassmorphic UI cards, responsive grid, dynamic project filtering, and interactive neural canvas animations).

---

## 🚀 Live Preview & Architecture

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Visuals & Effects**: HTML5 Neural Particle Canvas, CSS Backdrop-Filter Glassmorphism, Micro-interactions, and IntersectionObserver scroll reveals.
- **Data Configuration**: Projects decoupled into `js/projects.js` for zero-HTML maintenance.
- **Icons & Typography**: FontAwesome 6 + Google Fonts (`Outfit`, `Plus Jakarta Sans`, `JetBrains Mono`).

---

## 📁 Directory Structure

```
Portfilio_website/
├── index.html              # Main semantic HTML structure & SEO metadata
├── css/
│   ├── style.css           # Core design system, variables, layouts & responsive typography
│   └── animations.css      # Keyframes, glow effects, floating cards & scroll reveals
├── js/
│   ├── projects.js         # Centralized project configuration array
│   ├── particles.js        # Interactive glowing neural particle background canvas
│   └── script.js           # Dynamic card rendering, category filters, scrollspy & toast system
├── assets/
│   ├── images/             # Project cards preview visuals and hero portrait
│   │   ├── avatar.jpg      # Hero portrait avatar
│   │   ├── rag.jpg         # RAG pipeline preview
│   │   ├── trading.jpg     # Quantitative trading bot preview
│   │   ├── recruitment.jpg # Recruitment AI screening preview
│   │   └── vision.jpg      # Computer vision attendance preview
│   └── cv.pdf              # Downloadable CV / Resume PDF
└── README.md               # Documentation and customization guide
```

---

## 🛠️ How to Run Locally

You can run the project in any modern browser without installing complex framework tooling:

### Option 1: VS Code Live Server
1. Open the `Portfilio_website` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python Simple HTTP Server
Open your terminal in the `Portfilio_website` directory and run:
```bash
# Python 3
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## ⚙️ How to Customize Your Content

### 1. Adding or Editing Projects (`js/projects.js`)
All projects displayed on the portfolio are driven by `js/projects.js`. To add a new project or change a repository link, simply edit the array in `js/projects.js`:

```javascript
{
  id: "my-new-project",
  title: "Project Title",
  category: "ai-rag", // Options: 'ai-rag' | 'agents' | 'vision' | 'trading'
  badge: "Custom Badge",
  featured: true,
  description: "Brief summary of what the system accomplishes.",
  keyPoints: [
    "Key feature or technical innovation 1",
    "Key feature or technical innovation 2"
  ],
  techStack: ["Python", "FastAPI", "Docker"],
  image: "assets/images/your_image.jpg",
  githubUrl: "https://github.com/hasnainmuavia123/your_repo",
  liveUrl: "https://your-demo-url.com"
}
```

### 2. Updating Your CV / Resume
Simply replace the file at:
```
assets/cv.pdf
```
with your updated PDF resume.

### 3. Updating Your Photo / Portrait
Replace `assets/images/avatar.jpg` with your personal headshot.

### 4. Updating Social and Contact Links
- Email & Phone numbers are located in `index.html` (under `#about` and `#contact` sections) and in `js/script.js` (for mailto triggers).
- GitHub and LinkedIn URLs are set in `index.html` under the Hero and Contact sections.

---

## 🚢 Deployment Options

The project is static, fast, and ready to deploy instantly with zero build configuration on:
- **Vercel**: Import your GitHub repository or run `vercel` via CLI.
- **Netlify**: Drag-and-drop the folder or connect your Git repository.
- **GitHub Pages**: Go to `Repository Settings -> Pages -> Deploy from Branch -> /root`.
