import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/components/App';

import './setup-env';

test('<App />', () => {
  const expected = '<HashRouter />';
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toMatch(expected);
});
