import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../reusable-styles/reusableStyle";
import actions from "../../redux/actions";
import {
  AccountBody,
  AccountPageSection,
  AccountWrapper,
  UserAvatar,
  UserInfo,
  AccountContent,
  LogOutBtn,
} from "./AccountPage.style";
import { useNavigate } from "react-router-dom";
import { scrollUp } from "../../helper";

export default function AccountPage() {
  const { userData } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("loginData");
    dispatch(actions.clearUser());
    navigate("/", { replace: true });
  };
  useEffect(() => {
    scrollUp(0);
  }, []);
  return (
    <AccountPageSection>
      <Container>
        <AccountWrapper>
          <AccountBody>
            <AccountContent>
              <UserAvatar>
                <img
                  src={userData.picture}
                  alt=""
                  referrerPolicy="no-referrer" /* ! інакше - 403 */
                />
              </UserAvatar>
              <UserInfo>
                <h2>{userData.name}</h2>
                <a href={`mailto:${userData.email}`}>{userData.email}</a>
              </UserInfo>
            </AccountContent>
            <LogOutBtn>
              <button onClick={() => logOutHandler()}>Log out</button>
            </LogOutBtn>
          </AccountBody>
        </AccountWrapper>
      </Container>
    </AccountPageSection>
  );
}
