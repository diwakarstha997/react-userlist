import { Avatar } from "./Avatar"

export const UserTable = ({userList}) => {
    return (
        <div className="m-5 shadow-lg p-2 rounded">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td><Avatar gender={user.gender}/></td>
                                    <td>{user.name}</td>
                                    <td>{user.gender}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}