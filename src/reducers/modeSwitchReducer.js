let initialState = {
    image: 'active',
    rtsp: '',
    video: ''
}


export default function modeSwitchReducer(state = initialState, action) {
    console.log('action in reducer', action);

    switch (action.type) {
        case 'SWITCH_MODE': return ({
            ...state,
            state: action.payload
        }

        )
    }
}
