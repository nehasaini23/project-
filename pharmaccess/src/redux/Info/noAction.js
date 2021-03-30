import InfoConstants from './noType'
export const addNo = (number) => {
    return{
        type:InfoConstants.ADD_NO,
        payload:number,
    }
}


