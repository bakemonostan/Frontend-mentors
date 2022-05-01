import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.primary ? 'var(--soft-blue)' : 'var(white)'};
  color: ${(props) => (props.primary ? 'white' : 'var(black)')};
  padding: 1rem 1.2rem;
  margin: 1rem 0.5rem;
  border: none;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  box-shadow: 0px 5px 5px var(--greyish-blue);
  cursor: pointer;
`;

export default StyledButton;
