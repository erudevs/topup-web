import React from "react";
import Input from "../../../../components/atoms/Input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  inputName: "name",
  inputType: "text",
  inputPlaceholder: "Enter your name",
};
