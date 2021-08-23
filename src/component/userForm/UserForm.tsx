import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import style from "./userForm.module.scss";
import { User, userRoleDaraSource } from './User';

type Props = {
    userDetails: User,
    callBackUser: (arg: User) => void
}

const UserForm = (props: Props) => {

    const useFormField = (user: User) => {
        const [formFields, setFormFields] = useState<User>(user);

        const createChangeHandler = (key: keyof User) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            const value = e.target.value;
            setFormFields((prev: User) => ({ ...prev, [key]: value }));
        }

        const resetFormHandler = () => {
            for (const [key] of Object.entries(user)) {
                setFormFields((prev: User) => ({ ...prev, [key]: (key !== 'id') ? '' : 0 }));
            }
        }

        return { formFields, setFormFields, createChangeHandler, resetFormHandler };
    }

    const initialUser: User | undefined = props.userDetails;
    let { formFields, setFormFields, createChangeHandler, resetFormHandler } = useFormField(initialUser);

    useEffect(() => {
        if (props.userDetails.id) {
            setFormFields(props.userDetails);
        }
    }, [props.userDetails])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!formFields.role) {
            formFields.role =  userRoleDaraSource[0].id ?? formFields.role;
        }

        props.callBackUser(formFields);
        resetFormHandler();
    }

    const handleReset = (e: FormEvent) => {
        e.preventDefault();
        resetFormHandler();
    }

    return (
        <div className={style.formContainer} >
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="row">
                    <label className="col-3" htmlFor='name' >Name</label>
                    <input className="col-6" type="text" value={formFields.name} onChange={createChangeHandler("name")}></input>
                </div>

                <div className="row">
                    <label className="col-3" htmlFor='role'>Role</label>
                    <select className="col-6" value={formFields.role} onChange={createChangeHandler("role")}>
                        {
                            userRoleDaraSource.map(item => (
                                <option value={item.id} key={item.id}>{item.roleName}</option>
                            ))
                        }
                    </select>
                </div>

                <div className="row">
                    <label className="col-3" htmlFor='organization'>Organization</label>
                    <input className="col-6" type="text" value={formFields.organization} onChange={createChangeHandler("organization")}></input>
                </div>

                <div className="text-center">
                    <button type="reset" className="btn btn-danger">Reset</button>
                    <input type="submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    );
}

export default UserForm;