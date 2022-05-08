import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 5px 5px 2px var(--font-color);
  margin-bottom: 3rem;
  border-radius: 10px;
  width: 280px;

  .img {
    margin: 1.5rem 0 0;
  }

  .cardBody,
  .cardTitle,
  .bgDots {
    padding: 1rem;
  }
  .cardTitle {
    color: var(--dark-blue);
  }
  p {
    padding: 0 0 1.5rem;
    color: var(--greyish-blue);
  }

  .btn {
    width: 80%;
    margin-top: 1.5rem;
  }
`;

export default StyledCard;
