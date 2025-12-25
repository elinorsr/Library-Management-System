# Library-Management-System
# 📚 Library Management System

A full-stack web application designed to manage library operations, facilitating book inventory management, user administration, and automated borrowing workflows.

##  Features
* **Role-Based Access:** Distinct interfaces for Admins (Librarians) and Users (Readers).
* **Inventory Management:** Complete CRUD capabilities for managing book collections.
* **Smart Borrowing System:** Real-time tracking of borrowed items, due dates, and return status.
* **Automated Logic:** Server-side validation and status updates.

## Tech Stack
### Client Side (Frontend)
* **Framework:** Angular 16 (TypeScript)
* **Styling:** SCSS / CSS
* **Architecture:** Component-based MVVM

### Server Side (Backend)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (Common setup - verify if you used SQL instead)

## 📂 Project Structure
The repository is organized as a monorepo:
* `/` - Angular Client application
* `/server` - Backend API logic

##  Contributors
Developed as a final academic project by:
* **Elinor Srur**
* Raz Eliyahu
* Coral Buskila

##  Setup & Installation
1. Clone the repository.
2. **Client Setup:**
   - Run `npm install` in the root folder.
   - Run `ng serve` to start the frontend.
3. **Server Setup:**
   - Navigate to `/server` folder.
   - Run `npm install`.
   - Start the server (usually `npm start` or `node index.js`).
