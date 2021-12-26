import React, { lazy, Suspense } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const ManScreen = lazy(() => import("../pages/ManScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Routes>
          <Route end path="/mans" element={<ManScreen />} />
          <Route end path="/womans" element={<WomanScreen />} />
          <Route end path="/search" element={<SearchScreen />} />

          <Route end path="/character/:id" element={<CharacterScreen />} />

          <Route path="*" element={<Navigate to="/mans" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
