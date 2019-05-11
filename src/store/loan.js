import axios from 'axios'

const SET_ALL = 'SET_ALL'
const SET_SELECTED = 'SET_SELECTED'

const setAll = (pending, outstanding, completed) => ({
    type: SET_ALL,
    pending,
    outstanding,
    completed
})

const setSelected = (loan) => ({
    type: SET_SELECTED,
    loan
})

const getAllLoansByType = () => async (dispatch) => {
    try {
        const {data} = axios.get('/api/loans/')
        const {pending, outstanding, completed} = data
        dispatch(setAll(pending, outstanding, completed))
    }
    catch (err) {
        console.error(err)
    }
}

const createPending = (
    description, value, lendDate,
    promisedDate, lenderId, borrowerId
) => async (dispatch) => {
    try {
        const {data} = axios.post('/pending', {
            description,
            value,
            lendDate,
            promisedDate,
            lenderId,
            borrowerId
        })
        dispatch(setSelected(data))
    }
    catch (err){
        console.error(err)
    }
}

const approvePending = (loanId) => async (dispatch) => {
    try {
        const {data} = axios.put(`/pending/${loanId}/approve`)
        dispatch(setSelected(data))
    }
    catch (err){
        console.error(err)
    }
}

const completeOutstanding = (loanId) => async (dispatch) => {
    try {
        const {data} = axios.put(`/outstanding/${loanId}/complete`)
        dispatch(setSelected(data))
    }
    catch (err){
        console.error(err)
    }
}

const defaultState = {
    pending: {
        lending: [],
        borrowing: []
    },
    outstanding: {
        lending: [],
        borrowing: []
    },
    completed: {
        lending: [],
        borrowing: []
    },
    selected: null
}

const loanReducer = function(state = defaultState, action){
    switch (action.type){
        case SET_ALL: {
            const {pending, outstanding, completed} = action
            return {
                ...state,
                pending,
                outstanding,
                completed
            }
        }
        case SET_SELECTED:
            return {...state, selected: action.loan}
        default:
            return state
    }
}

export default loanReducer
