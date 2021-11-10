import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import Job from "./pages/forum/Job";

import MainForum from "./pages/forum/MainForum";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NoMatch from "./pages/NoMatch/NoMatch";
import Register from "./pages/register/Register";
import { supabase } from "./supabase/supabaseClient";
import { Loader } from "./utils/Loader";

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const userSession = supabase.auth.session();
    setSession(userSession);
    if (userSession) {
      getProfile(userSession.user.id);
    } else {
      setSession((s) => ({ ...s, profile: "Guest" }));
    }
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        getProfile(userSession.user.id);
      } else {
        setSession((s) => ({ ...s, profile: null }));
      }
    });
  }, []);
  const getProfile = async (id) => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();
      setSession((s) => ({ ...s, profile: data }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <BrowserRouter>
      <Loader loading={loading} error={error}>
        <NavigationBar profile={session.profile} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forum">
            <Route index element={<MainForum />} />
            <Route path="job" element={<Job />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Loader>
    </BrowserRouter>
  );
}

export default App;
