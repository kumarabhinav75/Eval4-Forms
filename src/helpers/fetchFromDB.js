import axios from 'axios';

const fetchFromDB = () => axios.get('http://10.0.2.2:8083/forms');

export default fetchFromDB;
