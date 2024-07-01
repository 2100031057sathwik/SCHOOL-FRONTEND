import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './services/firebaseConfig'; // Updated import

import Home from './components/Home';
import StudentLoginPage from './components/StudentLogin'; // Updated import
import Gallery from './components/Gallery';
import RegistrationPage from './components/RegistrationPage';
import AdminLogin from './components/AdminLogin';
import Academic from './components/academic'; // Added import
import Fee from './components/fee'; // Added import
import Exam from './components/exams'; // Added import

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login/admin" element={<StudentLoginPage />} />
        <Route path="/login/student" element={<StudentLoginPage />} />
        <Route path="/gallery" element={<Gallery currentUser={currentUser} />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/academic" element={<Academic />} /> {/* Added route */}
        <Route path="/studentdetails/fee" element={<Fee />} /> {/* Added route */}
        <Route path="/studentdetails/exam" element={<Exam />} /> {/* Added route */}
      </Routes>
    </Router>
  );
}

export default App;
