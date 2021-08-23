import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { User } from "../userForm/User";
import style from "./UserList.module.scss";

type Props = {
    userList: User[] | undefined,
    removeUser: (arg: User) => void;
    editUser: (arg: User) => void;
}

const UserList = (props: Props) => {
    const { url } = useRouteMatch();
    const [userList, setUserList] = useState<User[] | undefined>(props.userList);

    useEffect(() => {
        setUserList(props.userList);
    }, [props.userList])

    const handleEditUser = (selecteduser: User) => {
        props.editUser(selecteduser);
    }

    const handleDeleteUser = (selecteduser: User) => {
        props.removeUser(selecteduser);
    }

    return (
        <>
        <ul className={style.userList}>
            {userList &&
                userList.map(user => (
                    <li key={user.id}>
                        <div className="d-flex">
                            <span>{user.name}</span>
                            <span>{user.organization}</span>

                            <div className="ml-2">
                                { (url === '/') &&
                                    <button className="btn btn-warning" onClick={() => handleEditUser(user)}>Edit</button>
                                }
                                <button className="btn btn-info" onClick={() => handleDeleteUser(user)}>Delete</button>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
        </>
    );
}

export default UserList;