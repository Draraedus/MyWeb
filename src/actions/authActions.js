export const login = (email) => {
    return {
      type: 'LOGIN',
      payload: { email},
    }
}

export const loginVisit = () => {
    return {
        type: 'LOGINVISIT',
    }
}
  
export const logout = () => {
    return {
      type: 'LOGOUT',
    }
};