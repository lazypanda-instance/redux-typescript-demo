import { useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { User } from "../../component/userForm/User";
import UserList from "../../component/userList/UserList";
import { removeUser } from "../../utility/store/ActionCreators";
import { UserState } from "../../utility/type";

const Profile = () => {
    const usersList: User[] = useSelector((state: UserState) => state.users, shallowEqual);

    const updateUserDetails = (userDetails: User) => {
        return;
    }

    const removeUserDetails = (userDetails: User) => {
        // using react redux
        deleteUserFromStore(userDetails);
    }

    const dispatch: Dispatch<any> = useDispatch();
    const deleteUserFromStore: any = useCallback(
        (user: User) => dispatch(removeUser(user)),
        [dispatch]
    )

    return (
        <>
            <h1 className="text-center">Profile Page</h1>
            <div className="container-fluid">
                <UserList userList={usersList} editUser={updateUserDetails} removeUser={removeUserDetails}></UserList>
            </div>
        </>
    );
}

export default Profile;