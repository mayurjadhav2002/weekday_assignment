import { configureStore } from '@reduxjs/toolkit'
import { onFetch } from './reducers'
import { fetchData } from './actions'

export default configureStore({
  reducer: {
    onFetch:onFetch
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [fetchData],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        ignoredPaths: ['items.dates'],
      },
    }),
})