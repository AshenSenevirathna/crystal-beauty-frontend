import axios from "axios"
import { useEffect, useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import toast from "react-hot-toast";
import { Loader } from "../../components/loader.jsx";
import { MdVerified } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

function UserBlockConfirm(props) {
    const email = props.user.email;
    const close = props.close;
    const refresh = props.refresh;
    function blockUser() {
        const token = localStorage.getItem("token")
        // axios
        // .delete(import.meta.env.VITE_API_URL + "/api/products/" + productId,{
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        // .then((response)=> {
        //     console.log(response.data);
        //     close();
        //     toast.success("Product deleted successfully");
        //     refresh();
        // }).catch(()=>{
        //     toast.error("Failed to delete product");
        // });
    }

    return (
        <div className="fixed left-0 top-0 w-full h-screen bg-[#00000050] z-[100] flex justify-center items-center">
            <div className="w-[500px] h-[200px] bg-primary relative flex flex-col justify-center items-center gap-[40px]">
                <button onClick={close} className="absolute right-[-44px] top-[-44px] w-[40px] h-[40px] bg-red-600 rounded-full text-white flex justify-center items-center font-bold border border-red-600 hover:bg-white hover:text-red-600">X</button>
                <p className="text-xl font-semibold text-center">Are you sure you want to block the user with email : {email}?</p>
                <div className="flex gap-[40px]">
                    <button onClick={close} className="w-[100px] bg-blue-600 p-[5px] text-white hover:bg-accent">Cancel</button>
                    <button onClick={blockUser} className="w-[100px] bg-red-600 p-[5px] text-white hover:bg-accent">Yes</button>
                </div>
            </div>
        </div>
    )
}

export default function AdminUsersPage() {

    const [users, setUsers] = useState([]);
    const [isBlockConfirmVisible, setIsBlockConfirmVisible] = useState(false);
    const [userToBlock, setUserToBlock] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        if (isLoading) {
            const token = localStorage.getItem("token");
            if (token == null) {
                toast.error("Please login to access admin panel");
                navigate("/login");
                return;
            }
            axios.get(import.meta.env.VITE_API_URL + "/api/users/all-users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    console.log(response.data);
                    setUsers(response.data);
                    setIsLoading(false);
                });
        }
    }, [isLoading]);

    //console.log(products);
    return (
        <div className="h-full w-full p-[10px]">

            {
                isBlockConfirmVisible && <UserBlockConfirm refresh={() => { setIsLoading(true) }} email={userToBlock.email} close={() => { setIsDeleteConfirmVisible(false) }} />
            }

            <div className="bg-red-500">
                <button>{users.length + " Users"}</button>
            </div>

            {isLoading ? <Loader /> : <table className="border border-gray-700 w-full text-center rounded-lg overflow-hidden">
                <thead >
                    <tr className="bg-accent">
                        <th>Image</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user.email}>
                                <td>
                                    <img src={user.image} alt={user.firstName} referrerPolicy="no-referrer" className={"w-16 h-16 object-cover rounded-full border-2 p-1 " + (user.isBlock ? " border-red-600" : "border-green-600")} />
                                </td>
                                <td className="flex items-center gap-2">{user.email}{user.isEmailVerified && <MdVerified color="blue" />}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td className="h-full">
                                    <div className="flex items-center gap-2">
                                        <p className="h-full">{
                                            user.role == "admin" && <MdOutlineAdminPanelSettings />
                                        }</p>
                                        {user.role}
                                    </div>
                                </td>

                                <td>
                                    <div className="flex flex-row gap-[20px] justify-center items-center">
                                        {
                                            <button onClick={() => {
                                                setUserToBlock(user);
                                                setIsBlockConfirmVisible(true);
                                            }}
                                                className="w-[100px] h-[30px] bg-accent hover:bg-accent/70 text-white rounded-full cursor-pointer">{user.isBlock ? "Unblock" : "Block"}</button>
                                        }
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    {
                        users.length === 0 && (
                            <tr>
                                <td className="px-4 py-12 text-center text-secondary/60" colSpan={7}>
                                    No products to display.
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>}
        </div>


    )
}