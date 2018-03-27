import { combineReducers } from 'redux';
import registrationModal from './registrationReducers';
import search from './searchReducers';
import dummyProfile from './dummyProfile';
import { loginModal, storeUser } from './loginReducers';
import searchSelections from './searchViewReducers';

const rootReducer = combineReducers({
  registrationModal,
  search,
  profile: dummyProfile,
  loginModal,
  storeUser,
  searchSelections,
});

export default rootReducer;
