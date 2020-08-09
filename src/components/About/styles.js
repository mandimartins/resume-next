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

export const Container = styled.div`
  margin: 0 3rem;
`;

export const Text = styled.div`
  font-size: 2rem;
  line-height: 150%;
  text-indent: 3%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #e22c36;
`;

export const Subtitle = styled.h2`
  font-size: 6rem;
  font-weight: bold;
`;

export const SectionTitle = styled.p`
  font-size: 4rem;
  font-weight: bold;
  color: #e22c36;
  text-transform: uppercase;
  margin: 10rem 0rem;
  text-align: center;
`;

export const ImageContainer = styled.header`
  background-image: ${(props) => `linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    ),
    url('${props.image_url}')`};
  background-position: center;
  width: 25rem;
  height: 25rem;
  border-radius: 100%;
  align-self: center;
  margin-bottom: 1rem;
`;
