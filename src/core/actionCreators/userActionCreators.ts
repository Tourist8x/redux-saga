import { UserActionType } from "../actionTypes/userActionTypes";
import { IUser } from "../types";

export class UserActionCreator {
    static addUser(user: IUser): UserActionType.AddUserAction {
        return {
            type: UserActionType.ADD_USER,
            user
        }
    }
    static reloadUserList(users: IUser[]): UserActionType.AddUserSuccessAction {
        return {
            type: UserActionType.ADD_USER_SUCCESS,
            users
        }
    }
    static removeUser(message: string): UserActionType.RemoveUserAction {
        return {
            type: UserActionType.REMOVE_USER,
            message
        }
    }
    static getUserById(user: IUser): UserActionType.GetUserByIdAction {
        return {
            type: UserActionType.GET_USER,
            user
        }
    }
    static getListUser(users: IUser[]): UserActionType.GetListUserAction {
        return {
            type: UserActionType.GET_LIST_USER,
            users
        }
    }
    static showUserPanel(isShow: boolean): UserActionType.ShowUserPanelAction {
        return {
            type: UserActionType.SHOW_USER_PANEL,
            isShow
        }
    }
    static hideUserPanel(isHide: boolean): UserActionType.HideUserPanelAction {
        return {
            type: UserActionType.HIDE_USER_PANEL,
            isHide
        }
    }
}