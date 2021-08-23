import { User } from '../component/userForm/User';

type UserState = {
    users: User[]
}

type UserAction = {
    type: string;
    user: User
}

type DispatchType = (args: UserAction) => UserAction