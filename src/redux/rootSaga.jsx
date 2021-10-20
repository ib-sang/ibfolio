import {all, call} from "redux-saga/effects";

import profileSaga from "./Profiles/profiles.Sagas";

export default function* rootSaga(){
    yield all([
        call(profileSaga)
    ])
}