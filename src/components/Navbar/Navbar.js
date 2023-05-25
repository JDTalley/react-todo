import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: normal;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
`;

const Link = styled.a`
  color: inherit;
  margin: 0;
  padding: 0 8px;
  text-decoration: none;
  font-size: 1.25em;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  color: inherit;
  margin: 0;
  padding: 0;
  font-size: 1.25em;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
  }
`;

function Navbar({ isDarkMode, setIsDarkMode }) {
  return (
    <Nav>
      <Title>Todo</Title>
      <Links>
        <li>
          <Link
            href="https://www.jdtalley.com"
            target="_blank"
            alt="Developed by Dakota Talley"
          >
            J
          </Link>
        </li>
        <li>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsDarkMode();
            }}
          >
            {isDarkMode ? "L" : "D"}
          </Button>
        </li>
      </Links>
    </Nav>
  );
}

export default Navbar;
