import React from 'react';
import ResultsStyle from './styledComponents/Results';

const ResultsHolder = (props) => {

  const { state } = props;

  if (!state || Object.keys(state.results).length === 0) {
    return <ResultsStyle>The number of blocks of cheese you can afford will appear here...</ResultsStyle>
  }

    const currencyConverter = () => {
      const rates = state.results;
      const GBP = rates.GBP;
      const EUR = rates.EUR;

      return EUR / GBP;
    };

    const cheeseBlockCalculator = () => {
      const cheeseMoney = state.params.cheeseMoney;
      const euros = currencyConverter() * cheeseMoney;
      const cheeseBlock = 3.24;

      return euros / cheeseBlock;
    };

    const cheeseBlocks = cheeseBlockCalculator();

    return (
      <div>
        <ResultsStyle>
          {Math.floor(cheeseBlocks)} blocks of cheese!
        </ResultsStyle>
      </div>
    )
};

export default ResultsHolder;