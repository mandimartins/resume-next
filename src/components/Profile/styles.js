import styled from 'styled-components';

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

export const Title = styled.h1`
  font-size: 5rem;
  color: #e22c36;
`;

export const Subtitle = styled.h2`
  font-size: 6rem;
  font-weight: bold;
`;

export const GitStatus = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
