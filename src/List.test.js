// make react available
import React from 'react';
import STORE from './STORE';

import App from './App';

//NEED TO IMPORT CARD BECAUSE USED BY APP !!!!!!!!!!!!!!!!
import Card from './Card.js';



//make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

//make the List component available
import List from './List';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import renderer from 'react-test-renderer';

//this is the test case
it('renders without crashing', () => {
    //first create a DOM element to render the component into
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<List key='0'
        header="Test Header"
        cards={[]} />, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<List key='0'
        header="Test Header"
        cards={[]} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});