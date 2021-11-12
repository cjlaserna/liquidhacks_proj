import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./layout/NavigationBar";
import Job from "./pages/forum/Job";

import MainForum from "./pages/forum/MainForum";
import ViewJobPost from "./pages/forum/ViewJobPost";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { supabase } from "./supabase/supabaseClient";
import { Loader } from "./utils/Loader";
import Course from "./pages/courses/Course";
import Settings from "./accounts/Settings";
import CourseList from "./pages/courses/CourseList";

function App() {
  const [authsession, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const userSession = supabase.auth.session();
    setSession(userSession);
    if (userSession) {
      getProfile(userSession.user.id);
    } else {
      setSession((s) => ({ ...s, profile: null }));
    }
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);

      if (session) {
        getProfile(session.user.id);
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
  const profile = authsession ? authsession.profile : false;
  // console.log(profile);

  return (
    <BrowserRouter>
      <Loader loading={loading} error={error}>
        <Routes>
          <Route path="/" element={<NavigationBar profile={profile} />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login session={profile} />} />
            <Route path="forum">
              <Route index element={<MainForum />} />
              <Route
                path="job"
                element={<Job profile={profile} />}
              ></Route>{" "}
              <Route
                path="job/:viewId"
                element={<ViewJobPost profile={profile} />}
              />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/courses/:name" element={<Course />} />
            <Route path="/settings" element={<Settings profile={profile} />} />
          </Route>
        </Routes>
        <footer></footer>
      </Loader>
    </BrowserRouter>
  );
}

export default App;
