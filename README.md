# 🚀 Developer Portfolio

A fully responsive and modern portfolio website built using **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **EmailJS**. This portfolio showcases my skills, projects, education, and provides an interactive contact form that delivers messages directly to my inbox.

## 🖼️ Live Demo

👉 [View Live Portfolio](https://portfolio-five-nu-5p4ett36ug.vercel.app/)

## ✨ Features

- ⚡ Built with **Vite** for ultra-fast performance
- 🎨 Styled using **Tailwind CSS** for modern design
- ✨ Smooth animations and transitions
- 💼 Project showcase with GitHub and live demo links
- 📱 Fully **responsive** for all devices
- 📧 Contact form integrated with **EmailJS**
- 🔒 Uses **environment variables** for security
- 🎯 Clean and professional design
- 🌐 SEO optimized

## 💻 Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Email Handling**: EmailJS (client-side form submission)
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
.env
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Naveenkumarmasabathula/Portfolio.git
   cd Portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   🔐 **Important**: Never commit your `.env` file - it's already included in `.gitignore`

4. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Build & Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Deploy to Vercel

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com) and import your repository
3. Add your environment variables in Vercel's project settings
4. Click **Deploy**

## 📧 Contact Form Setup (EmailJS)

1. Create a free account at [EmailJS](https://emailjs.com)
2. Connect your email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### EmailJS Template Example

```html
Hello,

You have received a new message from {{user_name}} ({{user_email}}):

{{message}}

Best regards,
Your Portfolio Contact Form
```

## 🎨 Customization

### Colors & Styling

The project uses Tailwind CSS for styling. You can customize:

- **Primary Colors**: Edit the color classes in your components
- **Fonts**: Modify the font imports in `index.css`
- **Layout**: Adjust component layouts in individual `.tsx` files

### Content Updates

- **Projects**: Update the projects array in `Projects.tsx`
- **Skills**: Modify the skills list in `Skills.tsx`
- **Education**: Update education details in `Education.tsx`
- **Personal Info**: Edit hero section content in `Hero.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (1024px and up)
- 🖥️ Large screens (1440px and up)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Performance Features

- **Fast Loading**: Optimized with Vite's build system
- **Code Splitting**: Automatic code splitting for better performance
- **Image Optimization**: Optimized images for faster loading
- **SEO Ready**: Meta tags and semantic HTML structure

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Naveen Kumar**

- 🌐 [Portfolio](https://portfolio-five-nu-5p4ett36ug.vercel.app/)
- 📧 [naveenkumarmasabathula7@gmail.com](mailto:naveenkumarmasabathula7@gmail.com)
- 🐙 [GitHub](https://github.com/Naveenkumarmasabathula)
- 💼 [LinkedIn](https://www.linkedin.com/in/masabathulanaveenkumar/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Naveenkumarmasabathula/Portfolio).

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub and share it with others!

## 📝 Additional Files

Don't forget to add these files to your project:

### `.gitignore`
```gitignore
# Dependencies
/node_modules
/.pnp
.pnp.js

# Production
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

### `.env.example`
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

**Happy Coding! 🚀**