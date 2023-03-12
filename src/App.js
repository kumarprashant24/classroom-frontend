import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landingpage from './Components/Landingpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios"
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Check from './Components/Check';


function App() {
  const [user, setUser] = useState(false);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetchUser();
  }, [refresh]);

  const toggleRefresh = () => setRefresh((p) => !p);

  async function fetchUser() {
    let res =  await axios.get("http://localhost:5000/api/auth/login/success", { withCredentials: true })
    let { success, user } = res.data;
    success && setUser(user);
    console.log(user);
    }
  
  return (
    <BrowserRouter>
    {user ? (
      <>
      
    <Navbar user={user}/>
    {/* <Check/> */}
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard user={user} toggleRefresh={toggleRefresh}/>
            }
          />
      
        </Routes>
      </>
    ) : (
      <>
        <Routes>
          <Route path="*" element={<Landingpage  fetchUser={fetchUser}/>} />
        </Routes>
      </>
    )}
     <ToastContainer theme="colored" />
  </BrowserRouter>
  );
}

export default App;
