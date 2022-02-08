const initialState = {
    value: 0
}
type initialStateType = typeof initialState

export const startReducer = (state = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case 'INC_START_VALUE':
            return {...state, value: state.value + 1}
        case 'DEC_START_VALUE':
            return {...state, value: state.value - 1}
        case 'SET_START_COUNT':
            return {...state, value: action.start}
    }
    return state
}
type GlobalActionType = incStartValueType|setStarCountType|decStartValueType
export const incStartValueAC = () => ({
    type: 'INC_START_VALUE'

} as const)
export type incStartValueType = ReturnType<typeof incStartValueAC>
export const decStartValueAC = () => ({
    type: 'DEC_START_VALUE'

} as const)
export type decStartValueType = ReturnType<typeof decStartValueAC>

export const setStarCountAC = (start:number) => ({
    type: 'SET_START_COUNT',
    start,

} as const)
export type setStarCountType = ReturnType<typeof setStarCountAC>

