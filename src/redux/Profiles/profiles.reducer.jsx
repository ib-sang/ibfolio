import ProfilesType from "./profiles.Types";

const INITIAL_STATE = {
    profile:null,
    error:[]
}

const profilesReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case ProfilesType.PROFILE_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                error: []
            }
    
        default:
            return state;
    }
}

export default profilesReducer
