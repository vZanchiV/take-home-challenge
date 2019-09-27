import axios from "axios";
import {AT_CARD} from './actions-type';
const BASEURL="http://localhost:3000";

export const GET_CARDS = 'GET_CARDS';

export function readAllCard() {
    return function (dispatch) {
        axios.get(`${BASEURL}/cards`).then(res => {
            dispatch({type:AT_CARD.READ_ALL_CARD,payload:res.data})
        })
    }
}