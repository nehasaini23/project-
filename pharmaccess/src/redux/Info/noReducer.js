import InfoConstants from './noType'
const initialState ={
        data:0,
}

const noReducer = (state=initialState,action) =>{
    console.log('action --->', action)
    console.log('state --->', state)
    switch(action.type){
        case InfoConstants.ADD_NO:
            return{
                ...state,
                data: state.data+parseInt(action.payload)
        }
        
       default: return state
    }
}

export default noReducer