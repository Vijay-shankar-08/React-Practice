export const UPDATE_STATE = 'UPDATE_STATE'

 export const incrementCount = (data) =>{
    return{
        type:UPDATE_STATE,
        payload: data
    }
}