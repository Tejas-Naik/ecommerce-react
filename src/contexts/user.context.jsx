import { createContext, useEffect, useReducer, } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// Actual value you wanna access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

// Reducer
export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    console.log("dispatched");
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload,
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null,
}

// Provider
export const UserProvider = ({ children }) => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
    const { currentUser } = state;
    console.log(currentUser);
    const setCurrentUser = (user) => {
        dispatch(
            {
                type: USER_ACTION_TYPES.SET_CURRENT_USER,
                // type: "Not Handled Type",
                payload: user
            }
        )
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>
};