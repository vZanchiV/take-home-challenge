import ReducerCards from '../reducers/reducer-card';
import expect from 'expect';

describe('post reducer', () => {

    const mockData = {
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
        ]
    }

    const mockDataFiltered = {
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

  it('should return the initial state', () => {
    expect(ReducerCards(undefined, {})).toEqual({cardList:[]});
  });

  it('should handle GET_CARDs', () => {
    const updateAction = {
      type: 'GET_CARDS',
      payload: mockData.cards,
    };
    expect(ReducerCards({}, updateAction)).toEqual(mockData.cards);
  });


  it('should handle FILTER_CARD', () => {
    const updateAction = {
      type: 'FILTER_CARD',
      payload: mockDataFiltered.cards,
    };
    expect(ReducerCards({}, updateAction)).toEqual(mockDataFiltered.cards);
  });

});