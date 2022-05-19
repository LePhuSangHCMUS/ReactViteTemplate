import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SampleButton from '../components/sample/SampleComponent/SampleButton';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Sample/SampleButton',
  component: SampleButton,
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    }
  }

} as ComponentMeta<typeof SampleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'SampleButton',
  disabled: true,
  size: "small",
  onClick: ():any => {
    console.log("Clicked");
    
  }
};
