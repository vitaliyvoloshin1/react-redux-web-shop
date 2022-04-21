import { type } from "@testing-library/user-event/dist/type";

const initialState = {
    books: [{
        id: 0,
        title: 'sasasa'
    }]
};

export default (state = initialState, action) => {
    switch(action, type) {
        case 'SET_BOOKS':
            return {
                ...state,
                books: action, payload
            };
        case 'ADD_BOOKS':
            return { 
                ...state,
                books: [...state, books, action, payload]
            };

        default:
            return state;
    }
};