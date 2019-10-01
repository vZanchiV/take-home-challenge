import React from 'react';
import Card from '../components/card';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

function shallowSetup() {
    // Sample props to pass to our shallow render
    const props = {
      card : {
        "_id": "5d10a1fd4a557db9c6c348f7",
        "name": "Zolarity",
        "tags": [
            "dolor",
            "labore",
            "enim",
            "ea",
            "irure"
            ]
        }
    }
    const enzymeWrapper = shallow(<Card {...props} />);
    return {
        props,
        enzymeWrapper
      }
}

describe('<Card />', () => {   
    it('renders the component', () => {
    const { enzymeWrapper, props } = shallowSetup();
    expect(enzymeWrapper.find('article').hasClass('Card')).toBe(true);
    expect(enzymeWrapper.find('h2').hasClass('Card__title')).toBe(true);
    expect(enzymeWrapper.find('ul').hasClass('Card__content')).toBe(true);       
    });
});