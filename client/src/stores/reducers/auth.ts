import { AuthActionUnion, AuthActionTypes } from '../actions/auth';

export interface State {
    loggedIn: boolean,
    token: string
}

export const initialState: State = {
    loggedIn: false,
    token: null
}

export function reducer(state = initialState, action: AuthActionUnion) {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                loggedIn: true,
                token: action.payload
            };
        }
        case AuthActionTypes.Logout: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getToken = (state: State) => state.token;