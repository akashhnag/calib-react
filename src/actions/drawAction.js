export default function drawAction(data) {
    switch (data.shape) {
        case 'line': return {
            type: 'LINE_POINTS',
            payload: data.coods
        }
    }



}
