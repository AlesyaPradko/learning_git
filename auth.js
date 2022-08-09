function authenticate (login, password) {
	if(login === 'login' && password === 'password'){
		return 'You werelogged in';
	}
	else{
		return 'Login is incorrect;
	}
}
