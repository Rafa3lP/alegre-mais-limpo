export const setToken =  (state, token) => {
    state.token = token;
    state.autenticado = true;
    window.localStorage.setItem('token', token);
}
export const removeToken =  (state, token) => {
    state.user = {};
    state.token = '';
    state.autenticado = false;
    window.localStorage.clear();
}
export const setUser =  (state, user) => {
    state.user = user;
}

