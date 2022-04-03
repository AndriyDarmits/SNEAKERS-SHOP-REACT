import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Auth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const toggle = () => {
    setIsAuthorized(true);
    localStorage.setItem("logChecker", true);
    navigate("/home");
  };

  useEffect(() => {
    const isLogged = localStorage.getItem("logChecker");
    if (isLogged) {
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
  }, []);
  return (
    <div>
      {isAuthorized || localStorage.getItem("logChecker") ? (
        "Loading..."
      ) : (
        <div onClick={() => toggle()}>Log in</div>
      )}
      {(isAuthorized || localStorage.getItem("logChecker")) && <Outlet />}
    </div>
  );
};
