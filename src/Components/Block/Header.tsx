import React from "react";
import Button from "../Static/Button";
import styled from "styled-components";
import logo from "../../Assets/dribble_header_logo.jpg";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Logo src={logo} />
            <NavsHolder>
              <Navs>Find Talents</Navs>
              <Navs>For designers</Navs>
              <Navs>Inspiration</Navs>
              <Navs>Learn design</Navs>
              <Navs1>Go pro</Navs1>
            </NavsHolder>
          </Holder>
          <CallToAction>
            <Button title="Log in" hoverColor="#565564" />
            <Button
              title="Sign up"
              w="85px"
              h="45px"
              bg="#0D0C22"
              color="white"
              brad="7px"
              hover="#565564"
            />
          </CallToAction>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 100%;
  font-weight: 500;
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img``;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled.div`
  margin: 0 20px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    color: #565564;
  }
`;

const Navs1 = styled.div`
  margin: 0 20px;
  color: #f082ac;
  cursor: pointer;
`;

const CallToAction = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  align-items: center;
`;
