import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import SubHeader from "../components/SubHeader";
import { MainRouter } from "../router/main.router";

const MainLayout = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <React.Suspense fallback={<span />}>
      <div style={{ position: "sticky", top: 0, background: "white", zIndex: 1 }}>
        <Header
          isHovering={isHovering}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
        <Sidenav
          isHovering={isHovering}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      </div>
      <SubHeader />
      <Routes>
        {MainRouter?.map((router, index) => (
          <Route
            path={router.path}
            key={`${index}-${router.name}`}
            element={<router.component />}
          />
        ))}
        <Route path="/" element={<Navigate replace to="/glasses/" />} />
      </Routes>
    </React.Suspense>
  );
};

export default MainLayout;
