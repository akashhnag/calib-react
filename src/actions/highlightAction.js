export default function deleteAction(data) {
    switch (data.shape) {
        case 'line': return (
            {
                type: 'HIGHLIGHT_LINE',
                payload: data.index
            }
        )
    }
}
