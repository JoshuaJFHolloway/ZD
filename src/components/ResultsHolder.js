import React from 'react';
import ResultsStyle from './styledComponents/Results';

const ResultsHolder = (props) => {

  const {amountOfCheese} = props;

  return amountOfCheese ? (
    <ResultsStyle>
      {Math.floor(amountOfCheese)} blocks of cheese!
    </ResultsStyle>
  ) : (
    <ResultsStyle>
      The number of blocks of cheese you can afford will appear here...
    </ResultsStyle>
  )
};

export default ResultsHolder;