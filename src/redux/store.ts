import {combineReducers, createStore} from 'redux';
import {counterReducer} from "./count-reducer";
import {loadState, saveState} from "../utils/localStorage-utils";
import {maxReducer} from "./max-reducer";
import { startReducer } from './start-reducer';
import { editStatusReducer } from './editStatus-reducer';
import {errorReducer} from "./error-reducer";

let rootReducers = combineReducers({
    counter: counterReducer,
    max:maxReducer,
    start:startReducer,
    editStatus:editStatusReducer,
    error:errorReducer,
});
export type AppStateType = ReturnType<typeof rootReducers>
let store = createStore(rootReducers, loadState());

store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        max:store.getState().max,
        start:store.getState().start,
        editStatus:store.getState().editStatus,
        error:store.getState().error,
    })
})

export default store;
export type AppStoreType = typeof store