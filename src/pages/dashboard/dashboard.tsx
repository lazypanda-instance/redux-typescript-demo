import UserForm from "../../component/userForm/UserForm";
import { User } from "../../component/userForm/User";
import { useCallback, useEffect, useState } from "react";
import UserList from "../../component/userList/UserList";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { UserState } from "../../utility/type";
import { addUser, removeUser, updateUser } from "../../utility/store/ActionCreators";

const Dashboard = () => {
    const defaultUser: User = {
        id: 0,
        name: '',
        role: '',
        organization: ''
    }

    const [user, setUser] = useState<User>(defaultUser);

    /**
     * User add / remove / update operations
     */

    const saveUserDetails = (userDetails: User) => {
        if (!userDetails.name || !userDetails.organization) {
            return;
        }

        // using react redux
        if (userDetails.id !== 0) {
            updateUserInStore(userDetails);
        } else {
            addUserToStore(userDetails);
        }
    }

    const updateUserDetails = (userDetails: User) => {
        setUser((user: User) => user = userDetails);
    }

    const removeUserDetails = (userDetails: User) => {
        // using react redux
        deleteUserFromStore(userDetails);
    }

    /**
     * Redux implementation
     */
    const usersListArray: User[] = useSelector((state: UserState) => state.users, shallowEqual);
    const [usersList, setUsersList] = useState<User[]>(usersListArray);

    const dispatch: Dispatch<any> = useDispatch();

    // redux operations
    const addUserToStore: any = useCallback(
        (user: User) => dispatch(addUser(user)),
        [dispatch]
    );

    const updateUserInStore: any = useCallback(
        (user: User) => dispatch(updateUser(user)),
        [dispatch]
    )

    const deleteUserFromStore: any = useCallback(
        (user: User) => dispatch(removeUser(user)),
        [dispatch]
    )

    useEffect(() => {
        setUsersList(usersListArray);
    }, [usersListArray])

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col col-md-8">
                        <div className="text-center">Using Redux Store Mechanisam</div>
                        <UserForm userDetails={user} callBackUser={saveUserDetails}></UserForm>
                        <hr></hr>
                        <p className="text-center">User List</p>
                        <UserList userList={usersList} editUser={updateUserDetails} removeUser={removeUserDetails}></UserList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;