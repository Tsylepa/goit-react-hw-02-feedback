import styled from 'styled-components';

export const Container = styled.table`
  border-collapse: collapse;
  text-transform: capitalize;
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;

  tr:nth-of-type(2n + 1) {
    background-color: var(--table);
  }

  td {
    padding: 5px 15px;
  }
`;

export const Element = styled.tr`
  width: 100%;

  ${({ statName, statValue }) => {
    if (statName !== 'positivePercentage') return;
    const getColor = () => {
      if (Number.parseInt(statValue) > 75) {
        return 'var(--good)';
      } else if (Number.parseInt(statValue) > 40) {
        return 'var(--neutral)';
      }
      return 'var(--bad)';
    };
    return `color:var(--contrast-color); background-color: ${getColor()} !important;`;
  }}
`;

export const Name = styled.td`
  max-width: 50%;
`;

export const Value = styled.td`
  text-align: center;
  min-width: 140px;
`;
