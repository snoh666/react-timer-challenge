import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 0 0.5rem;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 5px;
  svg {
    width: 19px;
    height: 19px;
  }
`;

interface Props {
  [x: string]: unknown;
}

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
