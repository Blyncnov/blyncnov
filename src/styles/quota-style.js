import styled from "styled-components";

export const QuotesSectionContainer = styled.div`
width: 100%;
background-color: #01067A;
text-align: center;
color: white;
`;

export const QuoteSectionContainerInner = styled.div`
  color: white;
  padding: 2em 1em;
  border-radius: 2px;
  background-color: transparent;

  @media(max-width: 760px){
      h4{
          font-size: .8rem;
      }
  }
`;

export default QuotesSectionContainer;
