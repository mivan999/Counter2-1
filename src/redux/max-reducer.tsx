const initialState = {
    value: 5
}
type initialStateType = typeof initialState

export const maxReducer = (state = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case 'INC_MAX_VALUE':
            return {...state, value: state.value + 1}
        case 'DEC_MAX_VALUE':
            return {...state, value: state.value - 1}
        // case 'SET_START_COUNT':
        //     return {...state, value: action.start}
    }
    return state
}
type GlobalActionType = incMaxValueType|decMaxValueType//|setStarCountType
export const incMaxValueAC = () => ({
    type: 'INC_MAX_VALUE'

} as const)
export type incMaxValueType = ReturnType<typeof incMaxValueAC>
export const decMaxValueAC = () => ({
    type: 'DEC_MAX_VALUE'

} as const)
export type decMaxValueType = ReturnType<typeof decMaxValueAC>

// export const setStarCountAC = (start:number) => ({
//     type: 'SET_START_COUNT',
//     start,
//
// } as const)
// export type setStarCountType = ReturnType<typeof setStarCountAC>

