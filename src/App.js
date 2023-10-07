
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';

import { UserProvider } from "./UserContext";
import CreateProject from './components/admin/createProject/CreateProject';
import AdminDashBoard from './components/admin/adminDashboard/AdminDashBoard';
import Employees from './components/admin/employees/Employees';
import LiveProjects from './components/admin/liveProjects/LiveProjects';
import CompletedProjects from './components/admin/completedProjects/CompletedProjects';
import { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeDashBoard from './components/user/employeeDashboard/EmployeeDashBoard';
import ProjectInfo from './components/admin/projectInfo/ProjectInfo';
import CreateTask from './components/admin/createTask/CreateTask';





function App() {

  const[loading, setLoading]= useState(false)

  const [user, setUser] = useState({})

  return (


    <BrowserRouter>
      <UserProvider value={{user, setUser, loading, setLoading }}>


      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="userdashboard" element={<EmployeeDashBoard />} />
            <Route path="admindashboard" element={<AdminDashBoard />} />
            <Route path="employees" element={<Employees />} />
            <Route path="createproject" element={<CreateProject />} />
            <Route path="liveprojects" element={<LiveProjects />} />
            <Route path="completedProjects" element={<CompletedProjects />} />
            <Route path="viewproject" element={<ProjectInfo />} />
            <Route path="createtask" element={<CreateTask />} />
          </Route>
        </Routes>
        
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
