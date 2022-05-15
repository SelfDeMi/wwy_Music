
export const setToken = (key,value) => {
    value = JSON.stringify(value)
    return localStorage.setItem(key, value)
}

export const removeToken = (key) => {
    return localStorage.removeItem(key)
}

export const getToken = (key) => {
    //  let res = localStorage.getItem(key)
    // return JSON.parse(res)
    return localStorage.getItem(key)
}