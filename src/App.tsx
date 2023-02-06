import React, { useState } from "react";
import { MainLayout } from "./layout";
import { LandingPage, NotFound, Pastes } from "./pages/";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  return (
    //Routes
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <MainLayout setIsDark={setIsDark} isDark={isDark}>
              <LandingPage setIsDark={setIsDark} isDark={isDark} />
            </MainLayout>
          }
        />
        <Route
          path="/pastes/:id"
          element={
            <MainLayout setIsDark={setIsDark} isDark={isDark}>
              <Pastes setIsDark={setIsDark} isDark={isDark} />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout setIsDark={setIsDark} isDark={isDark}>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
