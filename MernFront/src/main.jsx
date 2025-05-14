import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext"; 
import "./index.css";
import {Route, RouterProvider,createBrowserRouter,createRoutesFromElements,Navigate,} from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Notes from "./components/Notes/Notes.jsx";
import SelectBranch from "./components/Notes/SelectBranch.jsx";
import FirstYear from "./components/Notes/FirstYear/FirstYear.jsx";
import SecondYear from "./components/Notes/SecondYear/SecondYear.jsx";
import ThirdYear from "./components/Notes/ThirdYear/ThirdYear.jsx";
import FourthYear from "./components/Notes/FourthYear/FourthYear.jsx";
import CoursePage from "./components/Notes/FirstYear/CoursePage.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
// import Upload from "./components/Notes/Upload.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Syllabus from "./components/Syllabus/Syllabus.jsx";
import AddSyllabus from "./components/Admin/AddSyllabus.jsx";
import SyllabusTable from "./components/Admin/SyllabusTable.jsx";
import AdminRoute from "./components/Admin/AdminRoute.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import NoNotesAvailable from "./components/Notes/NoNotesAvailable.jsx";
import UploadNotes from "./components/Admin/UploadNotes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
    

      {/* Private Routes */}
      <Route path="notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
      <Route path="branch" element={<PrivateRoute><SelectBranch /></PrivateRoute>} />
      <Route path="notes/firstyear" element={<PrivateRoute><FirstYear /></PrivateRoute>} />
      <Route path="notes/secondyear" element={<PrivateRoute><SecondYear /></PrivateRoute>} />
      <Route path="notes/thirdyear" element={<PrivateRoute><ThirdYear /></PrivateRoute>} />
      <Route path="notes/fourthyear" element={<PrivateRoute><FourthYear /></PrivateRoute>} />
      <Route path="NoNotesAvailable" element={<PrivateRoute><NoNotesAvailable /></PrivateRoute>} />



      <Route path="notes/:subjectCode" element={<PrivateRoute><CoursePage /></PrivateRoute>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      {/* <Route path="/upload" element={<PrivateRoute><Upload /></PrivateRoute>} /> */}
      <Route path="/syllabus" element={<PrivateRoute><Syllabus /></PrivateRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      <Route path="/admin/add-syllabus" element={<AdminRoute><AddSyllabus /></AdminRoute>} />
      <Route path="/admin/syllabus-table" element={<AdminRoute><SyllabusTable /></AdminRoute>} />
      <Route path="/admin/upload-notes" element={<AdminRoute><UploadNotes /></AdminRoute>} />



      {/* Redirect to login if route does not exist */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
    </>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>
);
