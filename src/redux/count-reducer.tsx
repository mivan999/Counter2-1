const initialState = {
    value: 0
}
type initialStateType = typeof initialState

export const counterReducer = (state = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case 'INC_VALUE':
            return {...state, value: state.value + 1}
        case 'RESET_COUNT':
            return {...state, value: action.start}
    }
    return state
}
type GlobalActionType = incValueType|resetCountType
export const incValueAC = () => ({
    type: 'INC_VALUE'

} as const)
export type incValueType = ReturnType<typeof incValueAC>

export const resetCountAC = (start:number) => ({
    type: 'RESET_COUNT',
    start,

} as const)
export type resetCountType = ReturnType<typeof resetCountAC>

