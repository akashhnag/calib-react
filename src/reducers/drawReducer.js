import { stat } from "fs"

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

            )
        default: return state

    }
}
