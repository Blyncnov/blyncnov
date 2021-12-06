import styled from "styled-components";

export const GridItemContainer = styled.div`
  border-radius: 2px;
  max-width: 100%;
  width: 100%;
  background-color: transparent;
`;

export const GridItemRow = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const GridItemWrap = styled.div`
  padding: 2em;
  border-radius: 2px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;

  h1 {
    font-size: 1.5rem;
    color: #020771;
  }

  p {
    margin: 1em 0;
    font-size: 1rem;
    color: grey;
  }

  div {
    padding: 1em;
    background-color: #f5f6f6;
    border-radius: 5px;
    color: black;
  }

  button {
    border-radius: 4px;
    padding: 1em 1.5em;
    border: none;
    color: white;
    background-color: #0583f2;
  }

  a {
    color: white;
    font-weight: 700;
    font-size: 1rem;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    padding: 2em 1.5em;
    gap: 3em;
  }

  div {
    padding: 0.5em;
  }

  p,
  a {
    font-size: 0.8rem;
  }
`;

export const GridItemColumn = styled.div`
  width: 100%;
  max-width: 100%;
  flex-basis: 50%;
  line-height: 1.2;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-top: 0.5em solid #333d49;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px; */
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */
`;

export default GridItemContainer;
