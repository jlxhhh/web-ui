import axios from 'axios';

const login = form => axios.post('/api/v1/user/login',form).then(res=>res.data);
const register = form => axios.post('/api/v1/user/register',form).then(res=>res.data);

export{
	login,
	register,
};