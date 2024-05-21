import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ITodos {
    userId: number
    id: number
    title: string
    completed: boolean
  }

export const todosApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
      getTodos: builder.query<ITodos[], unknown>({
        query: () => `/todos`,
      }),
      getTodoById: builder.query<ITodos, unknown>({
        query: (id: number) => `/todos/${id}`,
      }),
    }),
  })


export type TCounterInitialState = {
    count: number;
}

const initialState: TCounterInitialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: TCounterInitialState) => {
            state.count += 1;
        }
    }
})

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
export const {increment} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;