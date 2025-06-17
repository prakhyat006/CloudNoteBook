# CloudNotebook 📝

A secure, full-stack note-taking application built with React.js and Express.js that allows users to create, manage, and organize their notes in the cloud.

## Features ✨

- **User Authentication**: Secure user registration and login system
- **Personal Notes**: Create, edit, and delete notes with complete privacy
- **Secure Access**: All notes are protected and only accessible by the authenticated user
- **Real-time Updates**: Seamless note management with instant updates
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Cloud Storage**: All your notes are safely stored in the cloud

## Tech Stack 🛠️

### Frontend
- **React.js** - User interface and component management
- **HTML5/CSS3** - Structure and styling
- **JavaScript (ES6+)** - Frontend logic

### Backend
- **Express.js** - Server framework
- **Node.js** - Runtime environment
- **MongoDB/** - Database (specify which one you used)
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing

## Prerequisites 📋

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (depending on your database choice)
- Git

## Installation & Setup 🚀

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/cloudnotebook.git
cd cloudnotebook
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env

# Edit .env file with your configuration
# Add your database connection string, JWT secret, etc.
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory (open new terminal)
cd frontend

# Install dependencies
npm install
```

### 4. Environment Variables
Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### 5. Run the Application
```bash
# Start backend server (from backend directory)
npm start
# or for development
npm run dev

# Start frontend (from frontend directory - new terminal)
npm start
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## API Endpoints 🔗

### Authentication
- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - User login

### Notes
- `GET /api/notes` - Get all user notes
- `POST /api/notes` - Create new note
- `PUT /api/notes/:id` - Update existing note
- `DELETE /api/notes/:id` - Delete note

## Usage 📖

1. **Registration**: Create a new account with email and password
2. **Login**: Sign in using your credentials
3. **Create Notes**: Click "Add Note" to create a new note
4. **Edit Notes**: Click on any note to edit its content
5. **Delete Notes**: Use the delete button to remove unwanted notes
6. **Logout**: Securely logout when done

## Security Features 🔒

- Password hashing using bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- Secure session management

## Project Structure 📁

```
cloudnotebook/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── utils/
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
└── README.md
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements 🚀

- [ ] Rich text editor
- [ ] Note categories and tags
- [ ] Search functionality
- [ ] Note sharing capabilities
- [ ] Dark/Light theme toggle
- [ ] Export notes to PDF
- [ ] Mobile app version

## Screenshots 📸

<!-- Add screenshots of your application here -->
![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
![Note Editor](screenshots/editor.png)

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- React.js community for excellent documentation
- Express.js for the robust backend framework
- All contributors who helped make this project better

---

⭐ If you found this project helpful, please give it a star on GitHub!
