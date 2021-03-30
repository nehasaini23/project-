import {BUY_ICECREAM} from './iceTypes'

const buyicecream= (number=1) =>{
    return{
        type:BUY_ICECREAM,
        payload:number
    }
}

export default buyicecream;