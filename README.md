# Book Application

A full-stack MERN application for managing books, with user authentication, book reviews, and a modern UI.

---

##  Project Structure

```
Book-Application/
├── backend/    # Node.js + Express + MongoDB API
├── frontend/   # React + Bootstrap client
└── README.md   # Project documentation
```

---

##  Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Gokulrnair363/Book-Application.git
cd Book-Application
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create a .env file (see below for sample)
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## API Routes

### User Authentication
- `POST   /api/users/register`  — Register a new user
- `POST   /api/users/login`     — Login and receive JWT

### Books
- `GET    /api/books`           — Get all books
- `GET    /api/books/:id`       — Get book by ID
- `POST   /api/books`           — Add a new book (auth required)

### Reviews
- `POST   /api/books/:bookId/review` — Add a review to a book (auth required)

---

## Sample .env Config (backend)

Create a `.env` file in the `backend/` folder:

```
MONGO_URI=mongodb://localhost:27017/bookapp
JWT_SECRET=secret_key
PORT=5000
```

---

## 🖼️ Screenshots

Add screenshots to a `screenshots/` folder and reference them here:

### Register page
![Register](screenshots/register.png)
### Login Page
![Login](screenshots/login.png)

### Book List
![Book List](screenshots/booklist.png)

### Book Details
![Book Details](screenshots/bookdetails.png)

---


