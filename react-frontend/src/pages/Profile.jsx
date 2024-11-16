import React from 'react';
import { ChevronRight, User, Users, Calendar } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const ProfileLink = ({ title, icon: Icon }) => (
  <div className="bg-white mb-3 rounded-lg shadow-sm">
    <button className="w-full p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Icon className="text-red-500 mr-3" size={24} />
        <span className="text-gray-800 font-medium">{title}</span>
      </div>
      <ChevronRight className="text-gray-400" size={20} />
    </button>
  </div>
);

const Profile = () => {
  const links = [
    {
      title: "Account",
      icon: User
    },
    {
      title: "Buddy Dashboard",
      icon: Users
    },
    {
      title: "Explore Events",
      icon: Calendar
    }
  ];

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="sticky top-0 bg-white shadow-sm z-10">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          </div>
        </div>

        {/* Links Section */}
        <div className="p-4">
          {links.map((link, index) => (
            <ProfileLink 
              key={index}
              title={link.title}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default Profile;