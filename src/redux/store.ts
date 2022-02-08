import {combineReducers, createStore} from 'redux';

let rootReducers=combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
});
export type AppStateType=ReturnType<typeof rootReducers>
let store=createStore(rootReducers);
export default store;
export type AppStoreType=typeof store