import axios from "axios";
import {AT_CARD} from './actions-type';
const BASEURL="http://localhost:3000";
let allCards = []


export function readAllCard() {
    return function (dispatch) {
        axios.get(`${BASEURL}/cards`).then(res => {
            dispatch({type:AT_CARD.READ_ALL_CARD,payload:res.data})
            allCards = res.data
        })
    }
}

export function filterCard(searhText,cards) {
    return function (dispatch) {
            const cardsFiltered =  allCards
            .filter(card => card.name.toLowerCase().indexOf(searhText.toLowerCase()) !== -1 || card.tags.some(e => e.toLowerCase().indexOf(searhText.toLowerCase()) !== -1))
            dispatch({type:AT_CARD.FILTER_CARD,payload:cardsFiltered})      
    }
}
