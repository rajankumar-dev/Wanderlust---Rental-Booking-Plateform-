# Wanderlust – Rental Booking Platform 🏡✨

![](https://github.com/rajankumar-dev/Wanderlust---Rental-Booking-Plateform-/blob/main/frontend/public/tech-stack.png?raw=true)

**A MERN Stack Web Application inspired by Airbnb**

Wanderlust is a full-stack rental booking platform enabling users to explore properties worldwide, view detailed listings, leave reviews, and host their own properties. The project emphasizes **real-world functionality, scalability, and a seamless user experience**.

---

## 🚀 Features

- Full **CRUD operations** for property listings
- **RESTful APIs** with Express.js and modular routing
- **Dynamic pages** using EJS templating engine
- **Image upload, update & deletion** with Multer
- **Review & Rating system** with validation and timestamps ⭐
- **Interactive Map integration** with location popups 🗺️
- **Secure authentication** using sessions & cookies 🔒
- **Centralized error handling** for smooth UX

---

## 🖥 Screenshots / Demo

![Homepage](https://github.com/rajankumar-dev/Wanderlust---Rental-Booking-Plateform-/blob/main/frontend/public/screenshots/Screenshot%202026-01-23%20150734.png?raw=true)
![Property Listing](https://github.com/rajankumar-dev/Wanderlust---Rental-Booking-Plateform-/blob/main/frontend/public/screenshots/Screenshot%202026-01-23%20152217.png?raw=true)
![Booking & Reviews](https://github.com/rajankumar-dev/Wanderlust---Rental-Booking-Plateform-/blob/main/frontend/public/screenshots/Screenshot%202026-01-23%20152440.png?raw=true)

---

## 🛠 Tech Stack

| Layer           | Technology                                                                         |
| --------------- | ---------------------------------------------------------------------------------- |
| Frontend        | HTML, CSS, Bootstrap, EJS                                                          |
| Backend         | Node.js, Express.js                                                                |
| Database        | MongoDB with Mongoose                                                              |
| Utilities       | Multer (Image Upload), Joi (Validation), ExpressError & wrapAsync (Error Handling) |
| Version Control | Git & GitHub                                                                       |
| Deployment      | Render                                                                             |

---

## 📌 Key Highlights

- End-to-end **Full-Stack Application Development**
- Design and implement **scalable RESTful APIs**
- Handle **asynchronous operations efficiently**
- Implement **backend validation and middleware**
- Improve **UI/UX** with maps and dynamic content
- Write **clean, maintainable, and reusable code**

---

## 🎯 Project Takeaways

Building Wanderlust gave me **practical experience in creating an industry-ready web application**, from backend logic and database modeling to frontend rendering and user experience.
This project **strengthened my confidence** as a Full-Stack / MERN Stack Developer. 💪

---

## 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone https://github.com/rajankumar-dev/Wanderlust---Rental-Booking-Plateform-.git
```

2. **Install dependencies:**

```bash
npm install
```

3. **Setup environment variables:**
   Create a `.env` file with the following keys:

```
DB_URL = <Your MongoDB connection string>
SESSION_SECRET = <Your session secret>
```

4. **Run the application:**

```bash
npm start
```

---

## 📂 Project Structure

The **Wanderlust – Rental Booking Platform** follows a clean and modular full-stack architecture, separating backend and frontend concerns for better scalability and maintainability.

## 📂 Project Structure

```text
WANDERLUST – RENTAL BOOKING PLATFORM
│
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── token.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── booking.controller.js
│   │   ├── listing.controller.js
│   │   └── user.controller.js
│   │
│   ├── middleware/
│   │   ├── isAuth.js
│   │   └── multer.js
│   │
│   ├── model/
│   │   ├── booking.model.js
│   │   ├── listing.model.js
│   │   └── user.model.js
│   │
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── booking.route.js
│   │   ├── listing.route.js
│   │   └── user.route.js
│   │
│   ├── public/
│   ├── index.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── component/
│   │   │   ├── Card.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Nav.jsx
│   │   │   └── Star.jsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── BookingContext.jsx
│   │   │   ├── ListingContext.jsx
│   │   │   └── UserContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── ListingPage1.jsx
│   │   │   ├── ListingPage2.jsx
│   │   │   ├── ViewCard.jsx
│   │   │   ├── MyListing.jsx
│   │   │   ├── MyBooking.jsx
│   │   │   └── Booked.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── index.html
│
├── LICENSE
├── README.md
└── .gitignore


### 📌 Architecture Overview

- **Backend:** Node.js + Express with MVC pattern
- **Frontend:** React (Vite) with Context API for state management
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, sessions & protected routes
- **Media Handling:** Cloudinary + Multer
- **Deployment Ready:** Environment-based configuration

```

This structured approach ensures clean code organization, scalability, and ease of maintenance.

## 🔗 Live Demo

- [ Live Link](https://wanderlust-rental-booking-plateform-v7i2.onrender.com)

---

## 🙏 Special Thanks

- **Apna College** – structured guidance and tutorials
- **Shradha Khapra** – mentorship
- **Aman Dhattarwal** – inspiration

---

## 📄 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this project for personal and commercial purposes with proper attribution.

```

```
