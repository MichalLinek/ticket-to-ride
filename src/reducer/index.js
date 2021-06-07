import {combineReducers} from 'redux'

import myReducer from './my-reducer'

const reducer = combineReducers({
  reducers: myReducer,
})

export default reducer