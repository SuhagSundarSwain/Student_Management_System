# 📚 **Student Management System**

A **full-stack web application** designed to efficiently manage and track student information, courses, results, and attendance. The app provides a sleek interface for both students and administrators to interact with the system, supporting role-based access for enhanced security.

---

## 🌟 **Key Features**

### **For Students:**
- **Profile Management**: 
  - Students can create and manage their profiles.
  - View personal details, contact information, and academic performance.

- **Course Enrollment**: 
  - Enroll and drop courses for each semester.
  - View enrolled courses and their respective details.

- **Result Dashboard**: 
  - View results for all semesters in a tabular format.
  - Check SGPA and CGPA for the enrolled semesters.

- **Attendance Tracking**:
  - Students can view their attendance records for each course.
  - Alerts for low attendance and upcoming deadlines.

- **Notifications**: 
  - Receive important notifications about upcoming exams, course deadlines, etc.

### **For Administrators:**
- **Student Management**: 
  - Create, update, and delete student profiles.
  - Manage student enrollment in courses and update their results.

- **Course Management**:
  - Add, update, and delete courses.
  - Assign professors and set course schedules.

- **Result and Grade Management**:
  - Add and update student grades and performance records.
  - Automatically calculate CGPA based on course credits and grades.

- **Attendance Management**:
  - Track and update student attendance.
  - Generate attendance reports for students.

- **Admin Dashboard**:
  - A central place to manage all student, course, and attendance data.

---

## 🚀 **Tech Stack**

### **Frontend**:
- **React.js**: Build dynamic user interfaces with a component-based architecture.
- **Redux**: Centralized state management for smooth data handling across components.
- **Bootstrap 4**: Responsive design and modern UI components.
- **React Router**: Manage routing for a seamless single-page application experience.

### **Backend**:
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, powering the backend.
- **Express.js**: A web framework for building robust API endpoints.
- **MongoDB**: NoSQL database for flexible and scalable data storage.
- **JWT (JSON Web Token)**: Secure user authentication and authorization.

**Backend Repository**: [Student Management System Backend](https://github.com/SuhagSundarSwain/Student_Management_System_backend.git)

---

## ⚙️ **Setup Instructions**

Follow these steps to get the project up and running:

### 1. Clone the Repositories
Clone both the frontend and backend repositories.

#### Frontend:
```bash
git clone https://github.com/SuhagSundarSwain/student-management-system.git
cd student-management-system
```
#### Backend:
```bash
git clone https://github.com/SuhagSundarSwain/Student_Management_System_backend.git
cd Student_Management_System_backend
```

### 2. Install Dependencies

#### Frontend:
Ensure you have `Node.js` and `npm` installed. Then run:
```bash
npm install
```
#### Backend:
Ensure `Node.js` is installed. Then run:
```bash
npm install
```

### 3. Set Up Environment Variables
In the backend directory, create a `.env` file and add the following variables:
```.env
DB_URI=mongodb://localhost:27017/student_management_system
JWT_SECRET=your_jwt_secret_key
PORT=<--port-->
```

In the frontend directory, create a `.env` file and add:
```.env
REACT_APP_API_URL=<http://localhost:5000/api>
```

### 4. Start the Application

#### Backend:
```bash
npm run dev
```

#### Frontend:
```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

## 🛠️ **Project Structure**

#### Frontend
```css
src/
├── components/
│   ├── Dashboard/
│   ├── Profile/
│   ├── Course/
│   ├── Result/
│   └── Attendance/
├── store/
│   ├── authSlice.js
│   ├── courseSlice.js
│   └── studentSlice.js
├── App.js
└── index.js
```

#### Backend
```css
src/
├── controllers/
│   ├── studentController.js
│   ├── courseController.js
│   └── resultController.js
├── models/
│   ├── Student.js
│   ├── Course.js
│   └── Result.js
├── routes/
│   ├── studentRoutes.js
│   ├── courseRoutes.js
│   └── resultRoutes.js
├── middleware/
│   └── authMiddleware.js
└── server.js
```

## 📖 **How It Works**
#### 1. Authentication:
- The application uses JWT for secure login and access control.
- Students and administrators can log in and interact with the system based on their roles.

#### 2. Student Dashboard:
-After login, students can view their dashboard, which includes their personal information, enrolled courses, attendance, and academic results.

#### 3. Admin Dashboard:
- Admins have access to manage student data, including enrolling students in courses, updating results, and tracking attendance.

#### 4. Course and Result Management:
- Students can enroll in courses, and their results are automatically updated.
- Admins manage courses and grades through the admin interface.

#### 5. Real-Time Data Handling:
- Redux handles real-time state management, ensuring data consistency across different parts of the app.


## ✨ **Future Enhancements**
- **Mobile App**: Develop a mobile version for better access on smartphones.
- **Notification System**: Implement email and push notifications for deadlines, grades, and attendance alerts.
- **Advanced Analytics**: Provide detailed charts and graphs for academic performance insights.
- **Role-Based Permissions**: Enhance the role system to provide more granular access control (e.g., course admins, professors).
- **Cloud Deployment**: Host the application on cloud platforms like AWS or Heroku for better scalability.


## 👨‍💻 **Contributing**
#### We welcome contributions! Here’s how you can help:

- Fork the repository.
- Create a new branch (`git checkout -b feature/new-feature`).
- Commit your changes (`git commit -am 'Add new feature'`).
- Push to your branch (`git push origin feature/new-feature`).
- Create a pull request.


## 📬 **Contact**

If you have any questions or feedback, feel free to reach out!

- **Author**: [Suhag Sundar Swain](https://www.linkedin.com/in/suhagsundarswain/)
- **GitHub**: [github.com/SuhagSundarSwain](https://github.com/SuhagSundarSwain)

---

## 👏 **Acknowledgments**

A big thank you to the open-source community for all the incredible tools and libraries that make this project possible! 💙

---




