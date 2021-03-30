import {BUY_ICECREAM} from './iceTypes'

const initialState = {
    numOfIce: 20
}

const iceReducer =(state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state, 
            numOfIce: state.numOfIce - action.payload
        }
        default: return state
    }
}

export default iceReducer