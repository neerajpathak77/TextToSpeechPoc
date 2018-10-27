export const COPY='COPY'
export const SET_VOICE_CONVERTED_TEXT='SET_VOICE_CONVERTED_TEXT'

export const copy = (data) => {
    return {
        type:COPY,
        payload:data
    }
}

export const setVoiceConvertedText = (data) => {
    return {
        type:SET_VOICE_CONVERTED_TEXT,
        payload:data
    }
}