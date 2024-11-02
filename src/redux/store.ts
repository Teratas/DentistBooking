import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { UseSelector, TypedUseSelectorHook, useSelector } from 'react-redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import slice from './features/slice';

const persistConfig = {
    key:'rootPersist',
    storage
}
const rootReducer = combineReducers({slice})
const reduxPersistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer : reduxPersistedReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector