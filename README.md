# 🛒 E-Commerce Storefront with Admin Dashboard

## 📌 Overview
This is a **full-stack e-commerce application** built with **React, Node.js, Express, and PostgreSQL**, featuring a modern storefront for customers and a powerful admin dashboard for managing products, orders, and analytics. The platform provides a seamless shopping experience with authentication, product browsing, cart management, and checkout functionality.

## 🚀 Features
### **Customer Side**
- 🏬 **Product Browsing & Filtering** – View products with categories and search functionality.
- 🛍 **Cart & Checkout** – Add products to the cart and complete orders securely.
- 🔐 **User Authentication** – Firebase Authentication for secure login and registration.
- 📦 **Order Tracking** – View order history and status updates.

### **Admin Dashboard**
- 📊 **Sales Analytics** – Interactive charts for revenue, best-selling products, and customer demographics.
- 🛠 **Product Management** – CRUD operations (Create, Read, Update, Delete) for products.
- 📋 **Order Management** – View, update, and process customer orders.
- 🔐 **Role-Based Authentication** – Secure access for admins using Firebase Authentication.

## 🏗️ Tech Stack
### **Frontend:**
- React (with Context API for state management)
- Tailwind CSS for UI styling
- Recharts for data visualization

### **Backend:**
- Node.js & Express.js
- PostgreSQL for database management
- Firebase Authentication for user management

### **API Integrations:**
- FakeStore API for product data (for testing purposes)
- DummyJSON API for mock order data

## 📂 Folder Structure
```
/src
│── /components       # Reusable UI components
│── /context          # Context API for global state management
│── /pages            # Page components (Home, Product, Admin Dashboard, etc.)
│── /services         # API request handlers
│── /charts          # Data visualization components
│── App.js           # Main app component
│── index.js         # Entry point
```

## 🛠️ Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/samuelnjathi/ecommerce.git
   cd ecommerce-store
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm start
   ```
4. **Set up the backend (if applicable):**
   - Navigate to the backend folder and run:
   ```bash
   npm run dev
   ```
5. **Create a `.env` file** for Firebase Authentication and database connection.

## 📈 Future Enhancements
- 🛒 **Wishlist Feature** – Allow users to save favorite products.
- 💳 **Payment Integration** – Implement Stripe or PayPal for secure payments.
- 🌎 **Multi-language Support** – Enhance accessibility for global users.

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit pull requests.

## 📜 License
This project is licensed under the **MIT License**.

---
💡 **Built with passion and code!** 🚀

