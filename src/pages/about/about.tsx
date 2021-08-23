import { connect } from "react-redux";
import { User } from "../../component/userForm/User";
import UserList from "../../component/userList/UserList";
import { removeUser } from "../../utility/store/ActionCreators";

interface StateProps {
    usersList: any
}

interface DispatchProps {
    deleteUser: (user: User) => void;
    updateUser: () => void;
}

type Props = StateProps & DispatchProps;

const About = (props: Props) => {
    return (
        <>
            <h1 className="text-center">About Page</h1>
            <div className="container-fluid">
                <UserList userList={props.usersList} editUser={props.updateUser} removeUser={props.deleteUser}></UserList>
            </div>
        </>
    );
}

const mapState = (state: any) => ({
    usersList: state.users
})

const mapDispatch = {
    deleteUser: (user: User) => (
        removeUser(user)
    ),
    updateUser: () => {}
}

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(About);