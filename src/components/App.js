import React, { Component } from 'react';
import Headers from './Headers';
import InputsHolder from './InputsHolder';
import ResultsHolder from './ResultsHolder';
import {fetchData} from '../utils/fetchData';
import TwoColumnStyle from './styledComponents/TwoColumns';

class App extends Component {
  constructor(){
    super();
    this.state = {
      params: {
        cheeseMoney: false,
        buttonClicked: false,
      },
      results: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const params = this.state.params;

      params[name]= value;

    if (params.buttonClicked) {
      this.setState({params})
    }
  }

  areParamsValid() {
    const state = this.state.params;
    return (!!state.cheeseMoney.length);
  }

  getData() {
    if (this.areParamsValid()) {
      const params = this.state.params;
      params["buttonClicked"]= true;
      console.log("Fetching Data");

      //const request = state.cheeseMoney if passing cheeseMoney value into API
      fetchData(this.onSuccess, this.onFailure); // request would be in these parentheses
      this.setState({params});
    }
  }

  onSuccess = (response) => {
    console.log("onSuccess", response);
    this.setState({results: response.rates});
    this.buttonClickedFalse()
  };

  onFailure = (err) => {
    // handle error messaging
    console.log("Something has gone wrong...");
    this.buttonClickedFalse()
  };

  buttonClickedFalse() {
    const params = this.state.params;
    params["buttonClicked"]= false;
    this.setState({params});
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
              type={"number"}
              inputName={"cheeseMoney"}
              buttonName={"Convert GBP to cheese"}
              title={"Enter in your amount in GBP"}
            />
          </TwoColumnStyle>
          <TwoColumnStyle>
            <ResultsHolder
              state={this.state}
            />
          </TwoColumnStyle>
        </div>
      </div>
    );
  }
}

export default App;