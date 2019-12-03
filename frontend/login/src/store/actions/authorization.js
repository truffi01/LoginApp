import * as types from '../actions/types';

export const authBegin = () => {
    return {
        type: types.AUTH_START
    }
}

export const authSucc = token => {
    return {
        type: types.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: types.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('expiration');
    return {
        type: types.AUTH_LOGOUT
    };
}

//based on how the backend is set up for paramters 

export const checkAuthTime = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return disbatch => {
        disbatch(authBegin()); 
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password, 
        })
        .then(res => {
            const token = res.data.key;
            const expiration = new Date (new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
            dispatch(authSucc(token));
            dispatch(checkAuthTime(3600));
        })
        .catch(err => {
            disptach(authFail(err))
        })
    }
}

export const signUp = (username, email, password1, password2) => {
    return disbatch => {
        disbatch(authBegin()); 
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2 
        })
        .then(res => {
            const token = res.data.key;
            const expiration = new Date (new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expiration);
            dispatch(authSucc(token));
            dispatch(checkAuthTime(3600));
        })
        .catch(err => {
            disptach(authFail(err))
        })
    }
}