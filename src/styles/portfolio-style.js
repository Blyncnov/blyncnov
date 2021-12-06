import styled from "styled-components";

export const PortfolioSectionContainer = styled.div`
  color: #343f4a;
  width: 100%;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 2em 1em;
  border-radius: 2px;
  background-color: transparent;
`;

export const PortfolioRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 1em;


  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PortfolioColumn = styled.div`
  width: 100%;
      padding: 1em 0;
  transition: all 0.5s ease-in-out;
  background-color: #FAF7F2;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 5%) 0px 15px 15px -5px, rgb(0 0 0 / 2%) 0px 10px 10px -5px;

  :hover {
    transform: scale(1.05);
  }

    @media (max-width: 760px) {
  border-radius: 5px;
  }
`;

export const PortfolioImage = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: transparent;
  height: 150px;

  img {
    max-width: 90%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 100%;
  }
`;

export const Textwrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em 0;
`;

export default PortfolioSectionContainer;
