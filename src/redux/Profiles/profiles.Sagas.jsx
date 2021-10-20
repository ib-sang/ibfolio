import {all, call, takeLatest, put} from "redux-saga/effects";
import profileTypes from "./profiles.Types";
import {profileUserSuccess} from "./profiles.actions";
import {handleProfile} from "./profiles.helpers";




export function* getSnapshopProfile(profile, additionData = {}){
    try {
        yield put(
            profileUserSuccess({...profile})
            )
    } catch (error) {
        console.log(error.message);
    }
}


export function* profileUserStart({payload:{
    fullname,
    adress,
    phone,
    email,
    status,
    subject
}}){

    try {
        let profile = yield handleProfile(fullname, adress, phone, email, status, subject);
        yield getSnapshopProfile(profile)

        console.log(fullname, adress, phone, email, status, subject);
    } catch (error) {
        console.log(error);
    }
    // yield console.log(payload);
}

export function* onProfileUserStart(){
    yield takeLatest(profileTypes.PROFILE_USER_START, profileUserStart)
}

export default function* profileSaga(){
    yield all([
        call(onProfileUserStart)
    ])
}