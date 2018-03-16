import * as types from '../actiontypes/types';


var s4 = () =>{
   return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
var generID = () =>{
	return s4() + '-' + s4(); 
}

let data = JSON.parse(localStorage.getItem('addEm'));


 var initialState= data ? data : [];

var AddEmployReducer = (state = initialState , action)=>{

	switch(action.type){
		case types.ADD_EMPLOY :
			var newEmploy = {
				id:generID(),
				name:action.task.name,
				year:action.task.year,
				status:action.task.status
			};
			state.push(newEmploy);
			return state;
		default:return state;
	}
	
}
export default AddEmployReducer;

