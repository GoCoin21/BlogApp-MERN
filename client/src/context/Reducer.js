const Reducer = (state,action) => {
	switch(action.type){
		case "LOGIN_START":
			return {
				user : null,
				isFetcing : true,
				error : false,
			};
		case "LOGIN_SUCCESS" :
			return {
				user : action.payload,
				isFetcing : true,
				error : false,
			};
		case "LOGIN_FAILURE":
			return {
				user : null,
				isFetcing : false,
				error : true,
			};
		case "UPDATE_START":
			return {
				...state,
				isFetcing : true
			};
		case "UPDATE_SUCCESS":
			return {
				user : action.payload,
				isFetcing : false,
				error : false,
			};
		case "UPDATE_FAILURE":
			return{
				user : state.user,
				isFetcing : false,
				error : true,
			};
		case "LOGOUT":
			return{
				user : null,
				isFetcing : false,
				error : false,
			};
		default:
			return state;
	}
}
export default Reducer;