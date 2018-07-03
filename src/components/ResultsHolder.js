import React from 'react';
import ResultsStyle from './styledComponents/Results';
import { cheeseBlockCalculator, currencyConverter} from "./MiscellaneousFunctions";

const ResultsHolder = (props) => {

  const { state } = props;

  if (!state || Object.keys(state.results).length === 0) {
    return <ResultsStyle>The number of blocks of cheese you can afford will appear here...</ResultsStyle>
  }

    currencyConverter(state);

    cheeseBlockCalculator(state);

    const cheeseBlocks = cheeseBlockCalculator(state);

    return (
      <div>
        <ResultsStyle>
          {Math.floor(cheeseBlocks)} blocks of cheese!
        </ResultsStyle>
      </div>
    )
};

export default ResultsHolder;