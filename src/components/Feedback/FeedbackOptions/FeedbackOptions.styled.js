import styled from 'styled-components';

export const Options = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font: inherit;
  text-transform: capitalize;
  background: var(--button);
  box-shadow: var(--shadow);
  transition: background-color var(--transition-function),
    color var(--transition-function);
  cursor: pointer;

  :hover {
    color: var(--contrast-color);
  }

  &[name='good']:hover {
    background-color: var(--good);
  }

  &[name='neutral']:hover {
    background-color: var(--neutral);
  }

  &[name='bad']:hover {
    background-color: var(--bad);
  }
`;
