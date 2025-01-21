import React, { useContext } from 'react'
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../context/Auth';

const Profile = (user) => {

    const {logout} = useContext(AuthContext);

    const handelLogout=()=>{
        logout().then(()=>{
            alert("Logout!!");
        })
    }

    return (
        <div>
            <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user.photoURL?<img alt="Profile"src={user.photoURL} /> :<FaUser style={{ fontSize: '38px'}} />
                            }
                        </div>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li>
                            <a href='/update-profile'>Profile</a>
                        </li>
                        <li><a>Orders</a></li>
                        <li><a>Settings</a></li>
                        <li>
                            <a onClick={handelLogout}>LogOut</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
