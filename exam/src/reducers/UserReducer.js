import * as types from '../actiontypes/types';

let data = JSON.parse(localStorage.getItem('addEm'));


var initialState= data ? data : [];


var UserReducer = (state = initialState , action)=>{

	switch(action.type){
		case types.DELE_USER :
			const newState = Object.assign([], state);
      		const Delete = state.findIndex(user => {
        		return user.id === action.id
      		})
      		newState.splice(Delete, 1);
      		localStorage.setItem('addEm',JSON.stringify(newState));
      		return newState;
		default:return state;
	}
	
}
export default UserReducer;

