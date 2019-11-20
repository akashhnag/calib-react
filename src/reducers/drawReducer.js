let initialState = {
    imageURL: '../public/plotted.jpg',
    lineData: [],
    calibrationData: [],
    zoneData: [],
    directionData: []
}

export default function drawReducer(state = initialState, action) {
    console.log('payload', action.payload);
    console.log('state in red', state);

    switch (action.type) {
        case 'LINE_POINTS':
            return (
                {
                    ...state,
                    lineData: action.payload
                }

            )
        default: return state

    }
}
