import { Container, Element, Name, Value } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = props => {
  const prorsKeys = Object.keys(props);
  return (
    <Container>
      <tbody>
        {prorsKeys.map(el => {
          return (
            <Element key={el} statName={el} statValue={props[el]}>
              <Name key={el}>
                {el
                  .split(/(?=[A-Z])/)
                  .join(' ')
                  .toLowerCase()}
                :
              </Name>
              <Value>{props[el]}</Value>
            </Element>
          );
        })}
      </tbody>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
