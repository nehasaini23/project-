import {PATIENT_INFO} from './detailType'
const initialState ={
        arr:[],
}

const detailReducer = (state=initialState,action) =>{
 
    switch(action.type){
        case PATIENT_INFO:
            return{
                ...state,
                arr:[
                    ...state.arr,
                    {
                        fname:action.fname,
                        lname:action.lname,
                        dob:action.dob,
                        contact:action.contact,
                        email:action.email,
                        appoint:action.appoint,
                        immunization:action.immunization,
                        id:action.id,
                    },
                ]
            }
       default: return state
    }
}

export default detailReducer