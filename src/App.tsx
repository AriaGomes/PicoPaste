import React from "react";
import { MainLayout } from "./layout";
import { LandingPage } from "./pages/LandingPage";
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
        <Route path="/paste/:id" element={<div> test </div>} />
        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
