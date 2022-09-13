import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: coral;
  width: clamp(10vw, 220px, 70vw);
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0.5rem;
`;

export const Button = styled.button`
  padding: 0.25rem;
  background: transparent;
`;
