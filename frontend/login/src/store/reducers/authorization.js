import * as types from '../actions/types';
import { updateObject } from '../utl';

const initialS = {
    token: null, 
    error: null,
    loading: false, 
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const authSucc = (state, action) => {
    return updateObject(state, {
        token: action.token, 
        error: null, 
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
    });
}

const reducer = (state=initialS, action) => {
    switch (action.type){
        case types.AUTH_START: return authStart(state, action);
        case types.AUTH_SUCCESS: return authSucc(state, action);
        case types.AUTH_FAIL: return authFail(state, action);
        case types.AUTH_LOGOUT: return authLogout(state, action);
        default: 
            return state; 
    }
}

export default reducer; 