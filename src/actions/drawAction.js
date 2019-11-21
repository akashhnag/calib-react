export default function drawAction(data) {
    console.log('data in action', data);

    switch (data.shape) {
        case 'line': return {
            type: 'LINE_POINTS',
            payload: { coods: data.coods, name: data.name }
        }
    }



}
