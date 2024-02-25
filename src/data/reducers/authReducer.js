const authReducer = (state = { isAuthenticated: false, email: '', isAdmin: false}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          isAuthenticated: true,
          email: action.payload.email,
          isAdmin: true
        }
      case 'LOGINVISIT':
        return {
          isAuthenticated: true,
          email: "",
          isAdmin: false
        }
      case 'LOGOUT':
        return {
          isAuthenticated: false,
          email: '',
          isAdmin: false
        }
      default:
        return state
    }
  };
  
export default authReducer