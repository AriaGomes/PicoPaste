import React from "react";
import { MainLayout } from "./layout";
import { LandingPage, NotFound, Pastes } from "./pages/";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    //Routes
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <MainLayout>
              <LandingPage />
            </MainLayout>
          }
        />
        <Route
          path="/pastes/:id"
          element={
            <MainLayout>
              <Pastes />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
