import styled from "styled-components";

export const NavbarContainer = styled.div`
  color: white;
  width: 100%;
  padding: 1em 0;
  border-radius: 2px;
  background-color: transparent;
`;

export const NavbarRow = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 90%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`;

export const Logo = styled.div`
  width: auto;
  background-color: transparent;

  h1 {
    cursor: pointer;
  }
`;

export const NavbarListItems = styled.ul`
  width: auto;

  li {
    font-weight: 500;
    font-size: 1rem;
    display: inline;
    padding-left: 1.5em;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  li:hover {
    font-size: 1.1rem;
    /* transform: scale(1.2); */
  }

  @media (max-width: 760px) {
    background-color: black;
    position: fixed;
    z-index: 999;
    top: 0;
    text-align: center;
    padding-top: 2em;
    left: ${({ click }) => (click ? 0 : "-100%")};
    height: 100vh;
    width: 50vw;
    transition: all 1s ease-in-out;

    li {
      display: block;
      padding: 1em;
    }

    li:hover {
      background-color: white;
      color: black;
      border-radius: 0 4px 0 4px;
    }
  }
`;

export const Mobile = styled.div`
  width: auto;
  display: none;
  font-size: 1.5rem;

  @media (max-width: 760px) {
    display: block;
  }
`;

export default NavbarContainer;
