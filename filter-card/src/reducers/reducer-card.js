import { AT_CARD } from '../actions/actions-type';

const initialState = {
    cardList:[]
}


export default  function  ReducerCards (state = initialState ,action)  {
    switch(action.type) {
        case  AT_CARD.GET_CARDS:
            return action.payload;
        case AT_CARD.FILTER_CARD :
             return action.payload;
        default:
            return state
    }

}
