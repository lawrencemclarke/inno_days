import React from 'react';

import CricketModal from './CricketModal';

export default {
    component: CricketModal,
    title: 'Modal',
};

const Template = args => <CricketModal {...args} />;

export const Default = Template.bind({});
Default.args = {
    modal: {
        id: '1',
        title: 'Test Modal',
        state: 'Modal_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};