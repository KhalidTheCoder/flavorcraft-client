# 🍽️ FlavorCraft – Full-Stack Recipe Management App

---

## 🔍 Project Overview

FlavorCraft is a full-stack recipe management platform where users can add, view, update, and like recipes. The app offers secure Google login, personalized recipe management, cuisine-based filtering, and displays top-liked recipes. It features a responsive design with dark/light mode and smooth animations for an engaging user experience.

---

## 🌐 Live Project Links

- **Client:** [https://flavor-craft-27690.web.app/](https://flavor-craft-27690.web.app/)  
- **Server:** [https://flavor-sever-two.vercel.app/](https://flavor-sever-two.vercel.app/)

---

## 🛠️ Technologies Used

- **Frontend:** React.js, React Router, Tailwind CSS, Lottie Animations, React Awesome Reveal  
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** Firebase Authentication (Google login)  
- **Hosting:** Firebase Hosting (Client), Vercel Hosting (Server)

---

## ✨ Core Features

- 🔐 Firebase Authentication with Google login  
- ➕ Add, update, and delete personal recipes  
- ❤️ Like recipes and view top-liked recipes on the Home page  
- 🔍 Filter recipes by cuisine type  
- 🌗 Dark/Light theme toggle  
- 📱 Fully responsive design for mobile, tablet, and desktop  
- ✨ Engaging animations with Lottie and React Awesome Reveal

---

## 📦 Dependencies

- react  
- react-router
- tailwindcss  
- firebase  
- axios  
- react-awesome-reveal  
- lottie-react  
- express  
- mongoose  
- dotenv  
- cors  

---

## 🚀 How to Run Locally

1. **Clone both repositories:**

   ```bash
   git clone https://github.com/KhalidTheCoder/flavorcraft-client.git
   git clone https://github.com/KhalidTheCoder/flavorcraft-server.git

2. Set up and run the server:
   ```bash
   cd flavorcraft-server
   npm install
   nodemon index.js

3. Set up and run the client:
   
   Open a new terminal and navigate to the client directory:
     
    ```bash
    cd flavorcraft-client
    npm install

4. Create a .env file in the client folder and add your environment variables (example):
   
     ```ini
    VITE_API_URL=http://localhost:5000

    VITE_apiKey=your_firebase_api_key
    VITE_authDomain=your_firebase_auth_domain
    VITE_projectId=your_firebase_project_id
    VITE_storageBucket=your_firebase_storage_bucket
    VITE_messagingSenderId=your_firebase_messaging_sender_id
    VITE_appId=your_firebase_app_id

5. Start the client:
   ```bash
   npm run dev

6. Open your browser and go to:
   ```arduino
   http://localhost:3000

Note: Add .env to your .gitignore to keep environment variables secure.
