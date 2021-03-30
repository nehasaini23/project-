import {PATIENT_INFO} from './detailType'

export const patient = (fname,lname,dob,contact,email,appoint,immunization) =>{
    return{
        type:PATIENT_INFO,
        fname,
        lname,
        dob,
        contact,
        email,
        appoint,
        immunization,
        id:Math.random(),
    }
}