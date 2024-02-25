import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterReducer'

const reduxExtension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
  devTools: reduxExtension
})

export default store
