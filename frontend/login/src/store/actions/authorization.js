import * as types from './types';
import axios from 'axios'; 

export const authStart = () => {
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
    localStorage.removeItem('expirationDate');
    return {
        type: types.AUTH_LOGOUT
    };
}

//based on how the backend is set up for paramters 

export const checkAuthTime = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart()); 
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password, 
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date (new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSucc(token));
            dispatch(checkAuthTime(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}

export const signUp = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart()); 
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2 
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date (new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSucc(token));
            dispatch(checkAuthTime(3600));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    }
}


export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout()); 
        } else {
             const expirationDate = new Date(localStorage.getItem('expirationDate'));
             if (expirationDate <= new Date() ) {
                 dispatch(logout());
             } else {
                 dispatch(authSucc(token));
                 dispatch(checkAuthTime((expirationDate.getTime() - new Date().getTime()) / 1000))
             }
        }
    }
}