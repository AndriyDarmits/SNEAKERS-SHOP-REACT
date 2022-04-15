import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { logInWithGoogle } from "../../redux/thunk";
import { Container } from "../../reusable-styles/reusableStyle";
import {
  LoginBody,
  LoginPageSection,
  LoginTitle,
  LoginWrapper,
} from "./LoginPage.style";

export const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFailure = (result) => {
    alert(result);
  };
  const handleLogin = (googleData) => {
    dispatch(
      logInWithGoogle(
        googleData,
        navigate,
        location.state?.from?.pathname || "/"
      )
    );
    /* navigate(location.state?.from?.pathname || "/"); */
  };

  return (
    <LoginPageSection>
      <Container>
        <LoginWrapper>
          <LoginBody>
            <LoginTitle>Sign in with Google</LoginTitle>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={"single_host_origin"}
            />
          </LoginBody>
        </LoginWrapper>
      </Container>
    </LoginPageSection>
  );
};
