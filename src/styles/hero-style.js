import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  color: white;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 2em 1em;
  border-radius: 2px;
  background-color: transparent;
`;

export const HeroSectionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ row }) => (row ? "row-reverse" : "row")};
  gap: 3em;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroSectionColumn = styled.div`
  width: 100%;
  max-width: 100%;
  flex-basis: 50%;
  line-height: 1.2;

  h1 {
    font-size: 1.9rem;
    font-family: "PT Sans", sans-serif;
  }

  p {
    font-size: 1rem;
    margin: 1em 0;
    font-family: "Heebo", sans-serif;
  }

  button {
    border-radius: 4px;
    padding: 1em 4em;
    border: none;
    background-color: #0583f2;
    font-family: "Heebo", sans-serif;
    cursor: pointer;
  }

  a {
    color: white;
    font-weight: 700;
    font-size: 1rem;
  }

  img {
    width: 100%;
    align-self: center;
    max-width: 100%;
  }
`;

export default HeroSectionContainer;
