const initialState = {
    value: ''
}
type initialStateType = typeof initialState

export const errorReducer = (state = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case 'SET_ERROR':
            return {...state, value: action.value}

    }
    return state
}
type GlobalActionType =setErrorType
export const setErrorAC = (value:string) => ({
    type: 'SET_ERROR',
    value

} as const)
export type setErrorType = ReturnType<typeof setErrorAC>


