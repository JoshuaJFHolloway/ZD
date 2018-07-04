import React, { Component } from 'react';

import Headers from './Headers';
import InputsHolder from './InputsHolder';
import ResultsHolder from './ResultsHolder';

import TwoColumnStyle from './styledComponents/TwoColumns';

import {fetchData} from '../utils/fetchData';
import {cheeseBlockCalculator} from "./MiscellaneousFunctions";

class App extends Component {
  constructor(){
    super();
    this.state = {
        cheeseMoney: '',
        amountOfCheese: 0,
        rates: undefined,
    };

    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const state = this.state;

      state[name]= value;
      this.setState({state})
  }

  areParamsValid() {
    const {cheeseMoney} = this.state;
    return (!!cheeseMoney.length);
  }

  getData() {
    if (this.areParamsValid()) {
      fetchData(this.onSuccess, this.onFailure);
    }
  }

  onSuccess = (response) => {
    const cheeseBlocks = cheeseBlockCalculator(this.state.cheeseMoney, response.rates);
    this.setState({
      rates: response.rates,
      amountOfCheese: cheeseBlocks,
    });
  };

  onFailure = (error) => {
    // handle error messaging
    console.log("Something has gone wrong...", error);
  };

  render() {
    return (
      <div>
        <Headers/>
        <div>
          <TwoColumnStyle>
            <InputsHolder
              handleClick={this.getData}
              handleChange={this.handleChange}
              type="number"
              inputName="cheeseMoney"
              buttonName="Convert GBP to cheese"
              title="Enter in your amount in GBP"
            />
          </TwoColumnStyle>
          <TwoColumnStyle>
            <ResultsHolder
              amountOfCheese={this.state.amountOfCheese}
            />
          </TwoColumnStyle>
        </div>
      </div>
    );
  }
}

export default App;