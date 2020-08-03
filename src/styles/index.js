import styled from 'styled-components';

export const HeaderBackground = styled.div`
  min-height: 95vh;
  padding: 3rem 1rem;
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.9)
    ),
    url('https://cdn.pixabay.com/photo/2020/03/18/06/55/binary-4942920_960_720.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  /* url('https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847_960_720.jpg'); */
`;
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  background: #17141d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 1.5rem;
`;

export const Container = styled.div`
  margin: 3rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #00a3ff;
`;

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  background-image: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.9)
    ),
    url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png');
  background-position: center;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  align-self: center;
  margin-bottom: 1rem;
`;
