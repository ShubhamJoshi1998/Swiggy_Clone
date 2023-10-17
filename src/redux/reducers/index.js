import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import cusines from './cusines.reducer'


const rootReducer = combineReducers({
  form: reduxFormReducer,
  cusinesReducer : cusines 

})

export default rootReducer