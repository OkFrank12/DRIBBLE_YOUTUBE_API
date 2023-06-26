import React from "react";
import styled from "styled-components";

interface iButton {
  w?: string;
  bg?: string;
  h?: string;
  brad?: string;
  title?: string;
  hover?: string;
  color?: string;
  hoverColor?: string;
}

const Button: React.FC<iButton> = ({
  w,
  bg,
  h,
  brad,
  title,
  color,
  hover,
  hoverColor,
}) => {
  return (
    <div>
      <Container
        hoverColor={`${hoverColor}`}
        hover={`${hover}`}
        color={`${color}`}
        w={`${w}`}
        bg={`${bg}`}
        h={`${h}`}
        brad={`${brad}`}
      >
        {title}
      </Container>
    </div>
  );
};

export default Button;

const Container = styled.div<{
  w: string;
  bg: string;
  h: string;
  brad: string;
  color: string;
  hover: string;
  hoverColor: string;
}>`
  width: ${({ w }) => w};
  background-color: ${({ bg }) => bg};
  height: ${({ h }) => h};
  border-radius: ${({ brad }) => brad};
  color: ${({ color }) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;

  :hover {
    background-color: ${({ hover }) => hover};
    color: ${({ hoverColor }) => hoverColor};
  }
`;
