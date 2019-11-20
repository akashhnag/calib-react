let initialState = {
    shape: ''
}

export default function shapeSwitchReducer(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_SHAPE':
            return (
                {
                    ...state,
                    shape: action.payload
                }

            )


        default: return state;
    }
}
