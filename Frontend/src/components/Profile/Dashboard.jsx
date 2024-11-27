import React from "react";
import { useFirebase } from "../../app/Firebase/FirebaseContext";
import { Info } from 'lucide-react'
import { Link } from "react-router-dom";

const Dashboard = () => {
    const firebase = useFirebase();
    const UserInfo = firebase.userInfo;
    console.log(UserInfo);

    const UserName = UserInfo.displayName?UserInfo.displayName:UserInfo.email
    const UserEmail = UserInfo.email
    const UserEmailVerification = UserInfo.emailVerified
    const UserCreation = UserInfo.metadata.creationTime
    const UserLastLogin = UserInfo.metadata.lastSignInTime
    const UserUid = UserInfo.providerData[0].uid
    const UserProvider = UserInfo.providerData[0].providerId === "google.com"?"google.com":"Email and password"
    const UserPhoto = UserInfo.photoURL

    const handleLogout = () => {
        firebase.SignOut();
    };
    const handlePasswordReset = () => {
        if(UserProvider === "google.com"){
            alert("You can't reset your password with Google account");
        }
        else{
            firebase.ResetPassword(UserEmail);
            firebase.SignOut();
        }
    };

    return (
        <div className="max-h-fit w-full md:w/4  bg-gray-900 text-gray-100 flex flex-col md:flex-row z-40" >
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-gray-800 flex flex-col items-center justify-center text-center p-4 md:border-r md:border-gray-700">
                <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <img src={UserPhoto ? UserPhoto : "https://avatars.githubusercontent.com/u/14383795?v=4"} className="w-22 h-22 rounded-full" />

                </h1>
                <nav className="flex flex-col gap-4 text-center">
                    <Link to={"/dashboard"} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                        <span className="material-icons ">{UserName}</span>
                    </Link>
                    <Link to={"/dashboard"} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
                        <span className="material-icons">Settings</span>
                    </Link>
                    <button onClick={handlePasswordReset} className="bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700">
                        Reset Password
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <header className="bg-gray-800 p-4 flex justify-between items-center md:w-full">
                    <h2 className="text-xl font-semibold">My Profile</h2>
                    <button onClick={handleLogout} className="bg-indigo-600 px-4 py-2 rounded shadow hover:bg-indigo-700">
                        Log Out
                    </button>
                </header>

                {/* Content Area */}
                <main className="p-6 flex flex-col gap-6 md:overflow-y-auto">
                    {/* Cards Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p>{UserEmail}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">User verification status </h3>
                            <p className="flex items-center gap-2">
                                {UserEmailVerification ? "Verified" : "Not Verified"}
                                {UserEmailVerification ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-badge-check"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" /><path d="m9 12 2 2 4-4" /></svg> : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-badge-info"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>}
                                </p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">User id</h3>
                            <p>{UserUid}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Account Provider</h3>
                            <p>{UserProvider}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Account Creation Date</h3>
                            <p>{UserCreation}</p>
                        </div>

                        <div className="bg-gray-800 p-4 rounded shadow">
                            <h3 className="text-lg font-semibold">Last Login Date</h3>
                            <p>{UserLastLogin}</p>
                        </div>

                    </section>

                    {/* Table Section */}
                    <section className="bg-gray-800 p-4 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Activity</th>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td className="px-4 py-2">Task 1</td>
                                    <td className="px-4 py-2">2024-11-20</td>
                                    <td className="px-4 py-2">Completed</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2">Task 2</td>
                                    <td className="px-4 py-2">2024-11-19</td>
                                    <td className="px-4 py-2">Pending</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
