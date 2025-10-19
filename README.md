# Kaiburr Assessment 2025 - Task 3: Web UI Forms

A modern, responsive web application built with React 19, TypeScript, and Ant Design for managing and executing shell commands via REST API.

## 🚀 Features

- ✅ Create, Read, Update, Delete tasks
- ✅ Search tasks by name
- ✅ Execute shell commands in Kubernetes pods
- ✅ View execution history and output
- ✅ Command validation for security
- ✅ Responsive design with Ant Design
- ✅ Real-time notifications
- ✅ Error handling

## 🛠️ Technology Stack

- **Frontend**: React 19
- **Language**: TypeScript
- **UI Library**: Ant Design 5.x
- **Icons**: @ant-design/icons
- **HTTP Client**: Fetch API
- **Backend**: Java Spring Boot REST API (Task 1)

## 📋 Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x
- Backend API running on `http://localhost:8080`

## 🔧 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/kaiburr-task3-web-ui.git
cd kaiburr-task3-web-ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure backend URL (optional)**

By default, the app connects to `http://localhost:8080`. To change this, create a `.env` file:
```
REACT_APP_API_URL=http://your-backend-url:port/api/tasks
```

4. **Start the development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📱 Usage

### 1. Creating a Task
Click the "Create Task" button and fill in:
- **Task ID**: Unique identifier (e.g., "123")
- **Task Name**: Descriptive name (e.g., "Print Hello")
- **Owner**: Task owner name (e.g., "John Smith")
- **Command**: Shell command to execute (e.g., "echo Hello World!")

### 2. Viewing Tasks
All tasks are displayed in a table with:
- Task ID, Name, Owner, Command
- Number of executions
- Action buttons (Run, Delete)

### 3. Searching Tasks
Use the search bar to filter tasks by name in real-time.

### 4. Executing Commands
Click the "Run" button to execute a task's command. Results are shown in a modal with:
- Execution start/end times
- Command output
- Full execution history

### 5. Deleting Tasks
Click the delete button and confirm to remove a task permanently.

## 📸 Screenshots

### create task
![create_task.png](screenshots/create_task.png)

### delete task
![delete_task.png](screenshots/delete_task.png)

### execute command
![execute_command.png](screenshots/execute_command.png)

### execution results
![execution_results.png](screenshots/execution_results.png)

### home page
![home_page.png](screenshots/home_page.png)
## 🔒 Security Features

- Client-side command validation
- Blocks dangerous commands (rm -rf, mkfs, dd, chmod 777, etc.)
- Confirmation dialogs for destructive actions
- Input sanitization

## 🏗️ Project Structure
```
src/
├── App.tsx                 # Main application component
├── index.tsx              # Entry point
├── types/
│   └── Task.ts            # TypeScript interfaces
└── api/
    └── taskApi.ts         # API integration
```

## 🐛 Troubleshooting

### CORS Errors
If you encounter CORS issues:
1. Ensure your backend has CORS enabled
2. Use the proxy configuration in package.json
3. Or configure `REACT_APP_API_URL` in .env

### Backend Connection Failed
- Verify backend is running on port 8080
- Check MongoDB is connected
- Test endpoints with Postman/curl first

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🚢 Production Build
```bash
npm run build
```

Creates optimized production build in `build/` directory.


## 👤 Author

**[Your Name]**

## 📄 License

This project is created for the Kaiburr Assessment 2025.

---

**Note**: Make sure your backend from Task 1 is running before starting the frontend application.
