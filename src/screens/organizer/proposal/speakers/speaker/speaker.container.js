import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import loader from 'hoc-react-loader/build/core'

import Speaker from './speaker'

const mapStore = (store, { uid }) => ({
  ...store.data.users.get(uid),
  load: () => store.dispatch({ type: '@@ui/FETCH_USER', payload: uid }),
})

export default compose(
  inject(mapStore), //
  loader(), //
)(Speaker)
