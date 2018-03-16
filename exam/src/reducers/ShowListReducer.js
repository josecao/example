import * as types from '../actiontypes/types';

let data = JSON.parse(localStorage.getItem('addEm'));


var initialState= data ? data : [];


var ShowListReducer = (state = initialState , action)=>{

	switch(action.type){
		case types.UPDATE_USER :
			
      		return state;
		default:return state;
	}
	
}
export default ShowListReducer;

