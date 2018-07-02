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


  render() {
    return (
      <div>
        <Headers/>
        <div>

            <InputsHolder
              handleClick={this.getData}
              handleChange={this.handleChange}
              type={"number"}
              inputName={"cheeseMoney"}
              buttonName={"Convert GBP to cheese"}
              title={"Enter in your amount in GBP"}
            />


            <ResultsHolder
              state={this.state}
            />

        </div>
      </div>
    );
  }
}

export default App;