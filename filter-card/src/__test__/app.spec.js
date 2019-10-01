import ConnectedApp,{App} from '../container/app.js';
import configureStore from 'redux-mock-store';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({adapter: new Adapter()});

describe('app --- Shallow Render react component',()=>{
    const initialState = {
        cards:{
            "cards":[
                {
                    "_id": "5d10a1fdc4a42d1426d14ac6",
                    "name": "Mediot",
                    "tags": [
                        "ipsum",
                        "sint",
                        "veniam",
                        "pariatur"
                    ]
                }
            ]
        }
    }
    const mockStore = configureStore();
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedApp store={store} /> ) 
        
    })

    it('+++ render the DUMB component', () => {
       expect(container.length).toEqual(1)
    });

    it('+++ check Prop matches with initialState', () => {
        expect(container.prop('cards')).toEqual(initialState.output)
     });
      
     
   
});