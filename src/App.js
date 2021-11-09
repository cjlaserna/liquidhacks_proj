import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import Forum from "./pages/forum/Forum";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { supabase } from "./supabase/supabaseClient";

function App() {
  const [session, setSession] = useState(null);
  console.log(session);
  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
