export function getUser (state) {
    return state.user;
}

export function getNivelDeAcesso (state) {
    return state.user.nivelDeAcesso;
}

export function getToken (state) {
    return state.token;
}

export function isAuthenticated (state) {
    return state.autenticado;
}