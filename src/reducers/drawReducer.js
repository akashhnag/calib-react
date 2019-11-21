

let initialState = {
    imageURL: '../public/plotted.jpg',
    lineData: [],
    calibrationData: [],
    zoneData: [],
    directionData: []
}

export default function drawReducer(state = initialState, action) {
    console.log('state in reducer', state);

    switch (action.type) {
        case 'LINE_POINTS':
            return (
                {
                    ...state,
                    lineData: [...state.lineData, action.payload]
                }

            );
        // break;
        // case 'DELETE_LINE':
        //     return(
        //         {
        //             ...state,
        //             lineData:
        //         }
        //     )
        default: return state

    }
}
