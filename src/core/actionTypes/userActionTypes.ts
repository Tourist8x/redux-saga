import { IUser } from "../types";

export namespace UserActionType {
    export const ADD_USER = 'userActionTypes/ADD_USER';
    export const ADD_USER_SUCCESS = 'userActionTypes/ADD_USER_SUCCESS';
    export const REMOVE_USER = 'userActionTypes/REMOVE_USER';
    export const GET_USER = 'userActionTypes/GET_USER';
    export const GET_LIST_USER = 'userActionTypes/GET_LIST_USER';
    export const SHOW_USER_PANEL = 'userActionTypes/SHOW_USER_PANEL';
    export const HIDE_USER_PANEL = 'userActionTypes/HIDE_USER_PANEL';

    export interface AddUserAction {
        type: typeof ADD_USER,
        user: IUser
    }
    export interface AddUserSuccessAction {
        type: typeof ADD_USER_SUCCESS,
        users: IUser[]
    }
    
    export interface RemoveUserAction {
        type: typeof REMOVE_USER,
        message: string
    }

    export interface GetUserByIdAction {
        type: typeof GET_USER,
        user: IUser
    }

    export interface GetListUserAction {
        type: typeof GET_LIST_USER,
        users: IUser[]
    }

    export interface ShowUserPanelAction {
        type: typeof SHOW_USER_PANEL,
        isShow: boolean
    }

    export interface HideUserPanelAction {
        type: typeof HIDE_USER_PANEL
        isHide: boolean
    }

    export type UsersAction =
        | AddUserAction
        | RemoveUserAction
        | GetUserByIdAction
        | GetListUserAction
        | ShowUserPanelAction
        | HideUserPanelAction;
}