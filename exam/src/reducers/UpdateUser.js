import * as types from '../actiontypes/types';

let data = JSON.parse(localStorage.getItem('addEm'));


var initialState= data ? data : [];


var UpdateUser = (state = initialState , action)=>{

	switch(action.type){
		case types.UPDATE_USER :
			const newState = Object.assign([], state);
      		const Update = state.findIndex(user => {
        		return user.id === action.id
      		})
      		newState[Update].status = !newState[Update].status;
      		localStorage.setItem('addEm',JSON.stringify(newState));
      		return newState;
		default:return state;
	}
	
}
export default UpdateUser;

