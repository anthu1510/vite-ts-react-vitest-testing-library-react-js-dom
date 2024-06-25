import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux'
import { increment, TCounterInitialState } from './redux/reducers/counterReducer'
import type {TStore} from "./redux"
import { useGetUsersQuery } from './redux/reducers/counterReducer'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const counter = useSelector<TStore, TCounterInitialState>(state => state.counter);
  const {data, isSuccess, isError, error} = useGetUsersQuery({})

  if(isError) {
    console.log(error)
  }
  if(isSuccess) {
    console.log(data)
  }
 
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img role="roleLogoImage" src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img role="reactLogoImage" src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          counter is {counter.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
