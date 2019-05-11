import axios from 'axios'

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

const setUser = (user) => ({
    action: SET_USER,
    user
})

const removeUser = () => ({
    action: REMOVE_USER
})

export const getAuthStatus = () => async (dispatch) => {
    try {
        const {data} = await axios.get('/api/auth/me')
        dispatch(setUser(data))
    }
    catch (err){
        console.error(err)
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        const {data} = await axios.post('/api/auth/login', {
            email,
            password
        })
        dispatch(setUser(data))
    }
    catch (err){
        console.error(err)
    }
}

export const logout = () => async (dispatch) => {
    try {
        await axios.post('/api/auth/logout')
        dispatch(removeUser())
    }
    catch (err){
        console.error(err)
    }
}

export const signup = (email, password, name) => async (dispatch) => {
    try {
        const {data} = await axios.post('/api/auth/signup', {
            email,
            password,
            name
        })
        dispatch(setUser(data))
    }
    catch (err){
        console.error(err)
    }
}

export default function(state = null, action){
    switch(action.type){
        case SET_USER:
            return action.user
        case REMOVE_USER:
            return null
        default:
            return state
    }
}
