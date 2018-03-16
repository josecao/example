import {combineReducers} from 'redux';
import AddEmployReducer from './AddEmployReducer';
import UserReducer from './UserReducer';
import UpdateUser from './UpdateUser';
import ShowListReducer from './ShowListReducer';


const myReducer = combineReducers({
	AddEmployReducer,
	UserReducer,
	UpdateUser,
	ShowListReducer
});

export default myReducer;