import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${(props) => props.color || 'var(--soft-blue)'};
  color: ${(props) => props.fontColor || 'white'};
  padding: 0.8rem;
  width: ${(props) => props.width || 'auto'};
  /* margin: 0 0 0 0.5rem; */
  border: none;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  box-shadow: 0px 2px 5px var(--greyish-blue);
  cursor: pointer;
`;

export default StyledButton;
