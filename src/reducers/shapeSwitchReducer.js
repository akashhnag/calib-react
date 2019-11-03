let initialState={
    line: '',
    calibration: '',
    zone: '',
    direction: ''
}

export default function shapeSwitchReducer(state=initialState,action){
    switch(action.type){
        case 'SWITCH_SHAPE':
            return{
                ...state,
                state:action.payload
            }
            default:return state;
    }
}