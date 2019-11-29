

let initialState = {
    imageURL: '../public/plotted.jpg',
    lineData: [],
    calibrationData: [],
    zoneData: [],
    directionData: []
}

export default function drawReducer(state = initialState, action) {
    console.log('state in reducer', state);
    console.log('action in reducer', action.payload);

    switch (action.type) {
        case 'LINE_POINTS':
            return (
                {
                    ...state,
                    lineData: [...state.lineData, action.payload]
                }

            );
            break;
        case 'DELETE_LINE':
            return (
                {
                    ...state,
                    lineData: state.lineData.slice(action.payload.index, 1)
                }
            );
            break;
        case 'HIGHLIGHT_LINE':
            console.log('payload', action.payload);
            for (let i = 0; i < state.lineData.length; i++) {
                if (state.lineData[i].name === action.payload) {
                    console.log('element in condition', state.lineData[i]);
                    return (
                        {
                            ...state,
                            highlightLine: state.lineData[i].coods
                        }
                    );
                }
            }


            break;
        default: return state

    }
}
