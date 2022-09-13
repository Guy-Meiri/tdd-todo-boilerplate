import styled from 'styled-components';

// export const TodoContainer = styled.div`background-color: red`

export const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    width: clamp(10vw, 150px, 70vw);
    gap: 1rem;
`;
