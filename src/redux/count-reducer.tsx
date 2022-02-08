const initialState={
    value:0
}
type initialStateType=typeof initialState

export const counterReducer=(state=initialState,action:GlobalActionType):initialStateType=> {
switch (action.type) {
    case 'INC_VALUE':return {...state,value: state.value+1}
}
  return state
}
type GlobalActionType=incValueType
export const incValueAC=()=>({
  type:'INC_VALUE'

} as const)
 export type incValueType=ReturnType<typeof incValueAC>

