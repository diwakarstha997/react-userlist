import { useState } from "react";

export const UserForm = ({addUser}) => {
    const [user, setUser] = useState({});
    const [userDb, setUserDb] = useState([]);

    const handleOnSubmit = e => {
        e.preventDefault();
        addUser(user);
    }

    const handleOnChange = e => {
        const { name, value } = e.target;
        
        setUser({
            ...user,
            [name]: value, 
        });
    }
    return (
        <div className="w-50 shadow-lg rounded p-5 m-auto mt-5" >
            <form action="" onSubmit={handleOnSubmit}>
                <div className="row">
                    <div className="col-3">
                        <select name="gender" className="form-select" required onChange={handleOnChange}>
                            <option selected value="">Choose..</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <input type="text" className="form-control" name="name" placeholder="user name" onChange={handleOnChange}/>
                    </div>
                    <div className="col-3 d-grid">
                        <button className="btn btn-primary">Add User</button>
                    </div>
                </div>
            </form>
        </div>
    )
}