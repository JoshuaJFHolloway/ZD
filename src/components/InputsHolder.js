import React from 'react';
import Header from './Header';
import InputTitleStyle from './styledComponents/inputTitle';
import ButtonStyle from './styledComponents/Button';
import InputStyle from './styledComponents/Input';

const InputsHolder = (props) => {
  return (
    <div>
      <InputTitleStyle>
        <Header
          title={props.title}
        />
      </InputTitleStyle>

      <InputStyle
        type={props.type}
        name={props.inputName}
        onChange={props.handleChange}
      />

      <ButtonStyle
        name={props.buttonName}
        onClick={props.handleClick}
      >
        {props.buttonName}
      </ButtonStyle>
    </div>
  )
};

export default InputsHolder;