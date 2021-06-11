import { UserActionType } from "../actionTypes/userActionTypes"
import { IUser } from "../types";

export interface UsersState {
    user?: IUser,
    users?: IUser[],
    isShow?: boolean,
    isHide?: boolean,
    message?: string
}
const InitialUserState: UsersState = {
    user: {
        Id: 0,
        UserName: '',
        Password: '',
        Birthday: new Date(),
        Active: false,
        Address: '',
        Email: ''
    }
}

export default function userReducer(state: UsersState = InitialUserState, action: UserActionType.UsersAction): UsersState {
    switch (action.type) {
        case UserActionType.ADD_USER:
        case UserActionType.GET_USER:
            return { user: action.user };
        case UserActionType.REMOVE_USER:
            return { message: action.message };
        case UserActionType.GET_LIST_USER:
            return { users: action.users };
        case UserActionType.SHOW_USER_PANEL:
            return { isShow: action.isShow };
        case UserActionType.HIDE_USER_PANEL:
            return { isHide: action.isHide };
        default:
            return state;
    }
}