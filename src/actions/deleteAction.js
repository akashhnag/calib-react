export default function deleteAction(data) {
    switch (data.shape) {
        case 'line': return (
            {
                type: 'DELETE_LINE',
                payload: data.name
            }
        )
    }
}
