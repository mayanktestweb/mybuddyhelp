import React from 'react';
import { LineChart, Users, Bell, User, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navItems = [
    { icon: LineChart, label: 'Progress', path: '/progress' },
    { icon: Users, label: 'Buddies', path: '/buddies' },
    null,
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16 relative">
        {navItems.map((item, index) => 
          item ? (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center p-2 ${
                location.pathname === item.path 
                  ? 'text-red-500' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <item.icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ) : (
            <div key="center" className="relative -top-4">
              <button 
                onClick={() => navigate('/create')}
                className="bg-red-500 rounded-full p-4 shadow-lg hover:bg-red-600"
              >
                <Plus size={24} color="white" />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BottomNav;