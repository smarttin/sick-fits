import styled from 'styled-components';

const Supreme = styled.h3`
  background: ${(props) => props.theme.red};
  color: white;
  display: inline-block;
  padding: 2px 2.5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 1.5rem;
`;

export default Supreme;
