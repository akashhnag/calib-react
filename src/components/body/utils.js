import axios from 'axios';

const send = () => {
    console.log('send called');

    axios.get('http://localhost:5000/').then((res) => {
        console.log('response', res);

    })

}

export default send;
