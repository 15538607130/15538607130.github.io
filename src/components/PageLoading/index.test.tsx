import Enzyme, { render, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Loading from './index'
Enzyme.configure({ adapter: new Adapter() });
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};
test('Page Loading is render', () => {
    const ele = shallow(<Loading />)
    expect(ele.hasClass('loading')).toBeTruthy();
});