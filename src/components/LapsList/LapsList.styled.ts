import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const List = styled.ul`
  list-style: none;
  width: 150px;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: flex-start;
`;

export const ListItem = styled.li`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  justify-content: space-between;
`;
