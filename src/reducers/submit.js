
const SubmitReducer = (state,action)=> {
    switch(action.type){
        case 'HANDLE_SUBMIT':
            return{
                state:action.payload
            }
        default:
            return{
                state
            }
    }
}


export default SubmitReducer;