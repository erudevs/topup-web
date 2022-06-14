import React from "react";
import GameItem from "../../../../components/molecules/GameItem";

export default {
  title: "Components/Molecules/GameItem",
  component: GameItem,
};

function Template(args) {
  return <GameItem {...args} />;
}

export const Default = Template.bind({});

Default.args = {
  thumbnail: "Thumbnail-1",
  title: "Game Title",
  category: "Game Type",
};
