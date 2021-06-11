import { put, call, takeEvery, all, fork } from "redux-saga/effects";
import { UserActionCreator } from "../actionCreators";
import { UserActionType } from "../actionTypes/userActionTypes";
import { createUser } from "../services/userServices";

function* onAddUser( {user} : UserActionType.AddUserAction) {
    try {
        yield put(UserActionCreator.addUser(user));
        yield call(createUser, user);
        yield put(UserActionCreator.getListUser());
        const { data } = yield put(UserActionCreator.getListUser(data.lyrics));
    } catch (error) {
        console.log(error);
    }
}