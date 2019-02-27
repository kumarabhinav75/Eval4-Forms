import axios from 'axios';

const createFormAPI = payload => axios.post('http://10.0.2.2:8083/forms', payload);

export default createFormAPI;
