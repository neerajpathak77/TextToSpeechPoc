export const COPY='COPY'

export const copy=(data)=>{
    return {
        type:COPY,
        payload:data
    }
}