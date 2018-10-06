import React from 'react';
import { combineReducers } from 'redux';
import entitiesReducer from './entites';
import sessionReducer from './session';
import errorsReducer from './errors';


export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});
