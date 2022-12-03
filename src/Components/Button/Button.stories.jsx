import React from 'react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Add = Template.bind({});
Add.args = {
    actionType: "add",
    label: "Add todo"
}

export const Remove = Template.bind({});
Remove.args = {
    actionType: "remove",
    label: "Remove todo"
}