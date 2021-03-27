import { EMAIL_CHANGED } from './types';

export const emailChanged = value => {

    return {
        type: EMAIL_CHANGED,
        payload: value
    }
}