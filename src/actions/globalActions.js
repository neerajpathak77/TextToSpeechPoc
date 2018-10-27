export const COPY='COPY'
export const SAVE='SAVE'
export const SHARE='SHARE'
export const SET_VOICE_CONVERTED_TEXT='SET_VOICE_CONVERTED_TEXT'

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