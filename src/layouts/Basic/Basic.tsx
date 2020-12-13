import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
`;

const Basic: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Basic;
