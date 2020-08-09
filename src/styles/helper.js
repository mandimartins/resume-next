import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) =>
    props.justifyCenter ? 'center' : 'space-around'};
  align-items: ${(props) => (props.alignCenter ? 'center' : 'space-around')};
  flex-wrap: wrap;
`;

export const Box = styled.div`
  background: #17141d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: #222;
  }
`;

export const Wrapper = styled.div`
  margin: 0 3rem;
`;
