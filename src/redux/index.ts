import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { counterReducer, todosApi } from './reducers/counterReducer';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todosApi.middleware),
});

export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = ReturnType<typeof store.dispatch>;
setupListeners(store.dispatch)
export default store;


