import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function UserDataMobile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLogoutConfirmOpen,setIsLogoutConfirmOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(import.meta.env.VITE_API_URL + "/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUser(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center">
        {
            isLogoutConfirmOpen && (
                <div className="fixed z-[120px] w-full h-screen top-0 left-0 bg-black/30">
                    <div className="w-[300px] h-[30px] bg-primary rounded-lg p-4 flex flex-col justify-between items-center absolute top-[50%] left-0s">
                        <span className="text-lg">Are you sure you want to logout?</span>
                        <div className="w-full flex justify-around">
                            <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition" onClick={()=>{
                                localStorage.removeItem("token");
                                window.location.href="/login";
                            }}>
                            Yes
                            </button>
                            <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition" onClick={()=>{
                                setIsLogoutConfirmOpen(false);
                            }}>
                            No
                            </button>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="bg-accent text-white px-4 py-2 rounded hover:bg-secondary transition" onClick={()=>{
                               setIsLogoutConfirmOpen(false);
                            }}>
                            Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

      {/* Loading */}
      {loading && (
        <div className="w-[30px] h-[30px] border-[3px] border-white border-b-transparent rounded-full animate-spin"></div>
      )}

      {/* User Logged In */}
      {!loading && user && (
        <div
          className="relative flex items-center gap-2 cursor-pointer"
          ref={dropdownRef}
        >
          <img
            src={user.image}
            className="w-[40px] h-[40px] rounded-full border-2 border-primary object-cover"
          />
          <span className="text-white font-medium">{user.firstName}</span>

          <button
            onClick={() => setOpen(!open)}
            className="ml-1 text-white text-sm"
          >
            ▼
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-12 bg-secondary text-white rounded-lg shadow-lg w-48 overflow-hidden">
              <a
                href="/account"
                className="block px-4 py-2 hover:bg-accent transition"
              >
                Account Settings
              </a>
              <a
                href="/orders"
                className="block px-4 py-2 hover:bg-accent transition"
              >
                Orders
              </a>
              <button
                onClick={()=>{
                    setIsLogoutConfirmOpen(true);
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-500 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* Not Logged In */}
      {!loading && !user && (
        <a
          href="/login"
          className="bg-accent text-white px-5 py-2 rounded-full hover:opacity-90 transition shadow-md"
        >
          Login
        </a>
      )}
    </div>
  );
}
