import { api } from "src/boot/axios";

export const doLogin = async ({ commit, dispatch }, payload) => {
    let token = '';
    await api.post('/usuario/login', payload)
    .then(response => {
        token = response.data.token;
        commit('setToken', token);
        api.defaults.headers.common.Authorization = 'Bearer ' + token;
    });
    await dispatch('getUser', token);

}

export const signOut = async ({ commit }) => {
    api.defaults.headers.common.Authorization = '';
    commit('removeToken');
}

export const getUser = async ({ commit, dispatch }, token) => {
    await api.get('/usuario', {
        params: {
            token: token
        }
    }).then(response => {
        commit('setUser', response.data);
    }, err => {
        dispatch('signOut');
    });
}

export const init = async({ commit, dispatch }) => {
    const token = window.localStorage.getItem('token');
    if(token) {
        await commit('setToken', token);
        api.defaults.headers.common.Authorization = 'Bearer ' + token;
        await dispatch('getUser', token);
    } else {
        await dispatch('signOut');
    }
}
