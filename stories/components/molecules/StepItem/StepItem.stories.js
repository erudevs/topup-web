import React from "react";
import StepItem from "../../../../components/molecules/StepItem";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
};

function Template(args) {
  return <StepItem {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  stepIcon: "step1",
  stepTitle: "1. Start",
  stepDesc1: "Pilih salah satu game",
  stepDesc2: "yang ingin kamu top up",
};
