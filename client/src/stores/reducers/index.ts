import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from '@ngrx/store';
import * as fromAuth from './auth';

export interface AuthState {
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AuthState> = {
    auth: fromAuth.reducer
}

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');

export const selectLoggedIn = createSelector(selectAuthState, fromAuth.getLoggedIn);
export const selectToken = createSelector(selectAuthState, fromAuth.getToken);