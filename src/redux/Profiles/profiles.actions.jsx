import ProfilesType from "./profiles.Types"

export const profileUserStart = profilecrenDatials => ({
    type: ProfilesType.PROFILE_USER_START,
    payload: profilecrenDatials
})

export const profileUserSuccess = profilecrenDatials => ({
    payload: profilecrenDatials
})