import { configureStore } from '@reduxjs/toolkit'
import { onFetch } from './reducers'

export default configureStore({
  reducer: {
    onFetch: onFetch
  }
})