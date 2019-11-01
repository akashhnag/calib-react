export default function modeSwitchAction(mode) {
    console.log('current mode', mode);

    return {
        type: 'SWITCH_MODE',
        payload: mode
    }

}
