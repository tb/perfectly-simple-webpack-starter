import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  test('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
