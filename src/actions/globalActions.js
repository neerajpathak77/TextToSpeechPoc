export const COPY='COPY'
export const SAVE='SAVE'
export const SHARE='SHARE'
export const REMOVE='REMOVE'
export const SET_VOICE_CONVERTED_TEXT='SET_VOICE_CONVERTED_TEXT'
export const SET_SAVED_SEARCH_LIST='SET_SAVED_SEARCH_LIST'

export const copy = (data) => {
    return {
        type:COPY,
        payload:data
    }
}

export const save = (data) => {
    return {
        type:SAVE,
        payload:data
    }
}

export const remove = (data) => {
    return {
        type:REMOVE,
        payload:data
    }
}

export const share = (data) => {
    return {
        type:SHARE,
        payload:data
    }
}

export const setVoiceConvertedText = (data) => {
    return {
        type:SET_VOICE_CONVERTED_TEXT,
        payload:data
    }
}

export const setSavedSpeechList = (data) => {
    return {
        type:SET_SAVED_SEARCH_LIST,
        payload:data
    }
}

