//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [studentdata, setstudentData] = useState([
    {
      roll_no: 1,
      name: "Nishanth",
      standard: 11,
      mother_name: "Kavitha",
      father_name: "Murugesan",
      contact: "954789****",
      address: "Madurai"
    },
    {
      roll_no: 10,
      name: "Sriram",
      standard: 5,
      mother_name: "Geetha",
      father_name: "Pothumani",
      contact: "984523****",
      address: "Madurai"
    }
  ])
  const mentordata = [
    {
      employe_id: 1,
      name: "Rohini",
      subject: "Tamil",
      qualification: "Tamil(literature)",
      experience: "11 years",
      salary: 30000,
      contact: "921236****",
      address: "Madurai"
    },
    {
      employe_id: 2,
      name: "Lily Marry",
      subject: "English",
      qualification: "English(literature)",
      experience: "5 years",
      salary: 30000,
      contact: "752654****",
      address: "Madurai"
    },
    {
      employe_id: 3,
      name: "Devaki",
      subject: "Maths",
      qualification: "M.sc,B.Ed",
      experience: "8 years",
      salary: 40000,
      contact: "975489****",
      address: "Madurai"
    },
    {
      employe_id: 4,
      name: "Amutha",
      subject: "science",
      qualification: "M.sc(Science)",
      experience: "4 years",
      salary: 35000,
      contact: "914869****",
      address: "Madurai"
    },
    {
      employe_id: 5,
      name: "Ari Kumar",
      subject: "social",
      qualification: "M.sc(History)",
      experience: "1 year",
      salary: 28000,
      contact: "9231687****",
      address: "Madurai"
    }
  ]
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor mentordata={mentordata} />} />
          <Route path='mentorview/:id' element={<MentorView mentordata={mentordata} />} />
          <Route path="student" element={<Student studentdata={studentdata} setstudentData={setstudentData} mentorVisible={mentorVisible} />} />
          <Route path='studentview/:id' element={<StudentView studentdata={studentdata} />} />
          <Route path='admissionform' element={<AdmissionForm studentdata={studentdata} setstudentData={setstudentData} />} />
          <Route path='editstudent/:id' element={<EditStudent studentdata={studentdata} setstudentData={setstudentData} />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
