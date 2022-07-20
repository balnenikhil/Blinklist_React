import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { BookView } from "./components/pages/BookView/BookView";
import { Entrepreneurship } from "./components/pages/Entrepreneurship/Entrepreneurship";
import { MyLibrary } from "./components/pages/MyLibrary/MyLibrary";
import Themes from "./Themes/Themes";
import { LoginPage } from "./components/pages/Login/LoginPage";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isAuthenticated) {
    return (
    <ThemeProvider theme={Themes}>
       <Router>
        <Routes>
          <Route path="/" element={<MyLibrary/>} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/bookDetails/:id" element={<BookView/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    );
  }

  return <><ThemeProvider theme={Themes}><LoginPage /></ThemeProvider></>;
}

export default App;
