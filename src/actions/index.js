export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const isLogging = () => {
    return {
        type: 'SIGN_IN'
    }
}

// export const handleChange = (evt) => {
//     return {
//         type:'HANDLE_CHANGE',
//         payload: evt
//     }
// }

export const handleSubmit = (details) => {
    return {
        type:'HANDLE_SUBMIT',
        payload:details
    }
}
