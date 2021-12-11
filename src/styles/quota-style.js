import styled from "styled-components";

export const QuotesSectionContainer = styled.div`
width: 100%;
// background-color: #01067A;
text-align: center;
color: white;
position: relative;

`;

export const QuoteSectionContainerInner = styled.div`
  color: #333;
  padding: 2em 1em;
  border-radius: 4px;
  max-width: 80%;
  margin: 0 auto;
  background-color: #FAF7F1;
  // box-shadow: rgb(0 0 0 / 5%) 0px 15px 15px -5px, rgb(0 0 0 / 2%) 0px 10px 10px -5px;
box-shadow:  -8px 8px 12px 0 rgba(228, 224, 215), inset 12px -12px 20px rgba(228, 224, 219);
  margin-bottom: 1em;

  :hover{
    box-shadow:  -8px 8px 12px 0 rgba(228, 224, 215), inset 12px -12px 20px rgba(228, 224, 219);
  margin-bottom: 1em;
  }

  @media(max-width: 760px){
      h4{
          font-size: .8rem;
      }
  }
`;

export default QuotesSectionContainer;
