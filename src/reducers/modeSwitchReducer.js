let initialState = {
    image: 'active',
    rtsp: '',
    video: ''
}


export default function modeSwitchReducer(state = initialState, action) {
   

    switch (action.type) {
        case 'SWITCH_MODE': return ({
            //...state,
            state: action.payload
        }

        )
        default:return state;
    }
}
