import { auth } from '../../firebase';
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';

export const emailChanged = value => {
    return ({
        type: EMAIL_CHANGED,
        payload: value
    })
};

export const passwordChanged = value => {
    return ({
        type: PASSWORD_CHANGED,
        payload: value
    })
};

export const loginUser = ({ email, pass }) => {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, pass)
        .then( user => loginUserSuccess(dispatch, user))
        .catch(_ => {
            auth.createUserWithEmailAndPassword(email, pass)
                .then( user => loginUserSuccess(dispatch, user))
                .catch( _ => loginUserFail(dispatch));
        })
        ;
    }  
}

// helper functions
const loginUserSuccess = (dispatch, user) => {
    dispatch({type: LOGIN_USER_SUCCESS, payload: user})
}

const loginUserFail = (dispatch) => {
    dispatch({type: LOGIN_USER_FAIL})
}