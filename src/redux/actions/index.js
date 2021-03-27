import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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