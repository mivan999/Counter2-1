const initialState = {
    value: false
}
type initialStateType = typeof initialState

export const editStatusReducer = (state = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case 'CHANGE_STATUS':
            return {...state, value: action.value}

    }
    return state
}
type GlobalActionType =changeStatusEditType
export const changeStatusEditAC = (value:boolean) => ({
    type: 'CHANGE_STATUS',
    value

} as const)
export type changeStatusEditType = ReturnType<typeof changeStatusEditAC>


