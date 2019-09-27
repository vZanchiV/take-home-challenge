import { AT_CARD } from '../actions/actions-type';

const initialState = {
    cardList:[]
}


export default  function  ReducerCards (state = initialState ,action)  {
    switch(action.type) {
        case  AT_CARD.READ_ALL_CARD :
            return action.payload;
    }
    return state
}