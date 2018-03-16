import * as types from '../actiontypes/types';

export const AddEmploy = (task) => {
	return {
		type:types.ADD_EMPLOY,
		task
	}
};

export const DeleteUser = (id) => {
	return {
		type:types.DELE_USER,
		id
	}
};

export const UpdateUser = id => {
	return{
		type:types.UPDATE_USER,
		id
	}
}

export const ListUser = status => {
	return{
		type:types.LISTALL_USER,
		status
	}
}

export const ActiveUser = status => {
	return{
		type:types.ACTIVE_USER,
		status
	}
}

export const InActiveUser = status => {
	return{
		type:types.INACTIVE_USER,
		status
	}
}