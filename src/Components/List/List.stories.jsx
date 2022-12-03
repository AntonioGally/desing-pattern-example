import React from 'react';

import List from './List';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/List',
    component: List,
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
    todos: ["clean the house", "study react"]
}