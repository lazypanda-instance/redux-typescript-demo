import { User } from "../../component/userForm/User";
import { UserAction, UserState } from "../type";
import * as actionType from "./ActionTypes";

const initialUsers: UserState = {
    users: [
        {
            id: 1,
            name: "Lazy Panda",
            role: "1",
            organization: "Org X"
        },
        {
            id: 2,
            name: "Tech Savvy",
            role: "4",
            organization: "Org Y"
        }
    ]
}

const userReducer = (state: UserState = initialUsers, action: UserAction): UserState => {
    switch (action.type) {
        case actionType.ADD_USER:
            const newUser: User = {
                id: Math.random(),
                name: action?.user?.name,
                role: action?.user?.role,
                organization: action?.user?.organization
            }
            return {
                ...state,
                users: state.users.concat(newUser)
            }
        
        case actionType.REMOVE_USER:
            const updatedUserList = state.users.filter(item => item.id !== action?.user?.id)
            return {
                ...state,
                users: updatedUserList
            }

        case actionType.UPDATE_USER:
            const updatedUsersList = state.users.map(user => {
                if (user.id === action.user.id) {
                    return { ...user, name: action?.user?.name, 
                                      role: action?.user?.role, 
                                      organization: action?.user?.organization };
                }

                return user;
            });

            return {
                ...state,
                users: updatedUsersList
            }
    }

    return state;
}

export default userReducer;