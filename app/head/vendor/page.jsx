'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbarr from '../dashboard/components/Nabvarr';

export default function Page() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/head/login'); // 🔥 Redirect to login page (change '/login' to your login route)
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
       <Navbarr/>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome {user.data?.name}!
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4 text-gray-700">
          <p><span className="font-semibold">Email:</span> {user.data?.email}</p>
          <p><span className="font-semibold">Role:</span> {user.data?.role?.name}</p>
          <p className="font-semibold mb-2">Permissions:</p>
<div className="flex flex-wrap gap-2">
  {user.data?.role?.permissions.map((permission, index) => (
    <span
      key={index}
      onClick={() => alert(`You clicked on "${permission}"`)}
      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm shadow"
    >
      {permission}
    </span>
  ))}
</div>
        </div>

        <div className="mt-8">
          {user.data?.role?.name === 'Admin' && (
            <div className="p-6 bg-blue-100 rounded-xl text-blue-800 text-center font-semibold">
              Admin Dashboard
            </div>
          )}
          {user.data?.role?.name === 'vendor' && (
            <div className="p-6 bg-green-100 rounded-xl text-green-800 text-center font-semibold">
              Vendor Dashboard
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
