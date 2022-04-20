import React from "react";

import {
  Container,
  FormGroup,
  Input,
  input,
  Select,
  Option,
  Label,
  SubmitInput,
  RangeInput,
  TextArea,
  Span,
  InputPassword,
  InputNumber
} from "./styles/form";

const Form = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};
Form.Select = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>;
};
Form.Option = ({ children, ...restProps }) => {
  return <Option {...restProps}>{children}</Option>;
};
Form.FormGroup = ({ children, ...restProps }) => {
  return <FormGroup {...restProps}>{children}</FormGroup>;
};
Form.TextArea = ({ children, ...restProps }) => {
  return <TextArea {...restProps}>{children}</TextArea>;
};
Form.Input = ({ children, ...restProps }) => {
  return <Input  {...restProps} />;
};
Form.SubmitInput = ({ children, ...restProps }) => {
  return <SubmitInput {...restProps} />;
};


Form.RangeInput = ({ children, ...restProps }) => {
  return <RangeInput {...restProps} />;
};

Form.Label = ({ children, ...restProps }) => {
  return <Label {...restProps}>{children}</Label>;
};

Form.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>;
};

Form.InputPassword =({ children, ...restProps }) => {
  return <InputPassword {...restProps}>{children}</InputPassword>;
};
Form.InputNumber =({ children, ...restProps }) => {
  return <InputNumber {...restProps}>{children}</InputNumber>;
};
Form.input =() => {
  return <input ></input>;
};
export default Form;
