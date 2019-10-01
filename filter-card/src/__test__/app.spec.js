import { shallow, configure } from 'enzyme';
import ConnectedApp,{App} from '../container/app';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import * as index from '../actions/index';
import React from 'react';

configure({adapter: new Adapter()});

describe('app --- Shallow Render react component',()=>{
    const initialState = {
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
                },
                {
                    "_id": "5d10a1fdc4a42d1426d14uI7",
                    "name": "Merce",
                    "tags": [
                        "meee",
                        "sint",
                        "veniam",
                        "pariatur"
                    ]
                }
            ]
    }
    const mockStore = configureMockStore([thunk]);
    let store,container

    beforeEach(()=>{
        store = mockStore(initialState)
        container = shallow(<ConnectedApp store={store} /> ) 
    })

    it('Render the DUMB component', () => {
       expect(container.length).toEqual(1)
    });

    it('Check Prop matches with initialState', () => {
        expect(container.prop('cards')).toEqual(initialState.output)
     });
      
     it(' check action on dispatching ', () =>  {
        
        const expectedActions = [
            {
              'payload':[],
              'type': 'FILTER_CARD',
            },
          ];
          const action = store.getActions();
          store.dispatch(index.filterCard(initialState));
          expect(action).toEqual(expectedActions);
    });
   
});