import styled from 'styled-components';

export interface HeadingProps {
  color: string;
}

const Heading = styled.h1<HeadingProps>`
  color: ${({ color }) => color};
`;

export default Heading;
