import React from 'react';
import { Star } from 'lucide-react';

const BuddyListItem = ({ name, rating, imageUrl, onClick }) => (
  <div className="flex items-center bg-white p-4 mb-3 rounded-lg shadow-sm" onClick={onClick} >
    {/* Profile Image */}
    <div className="w-12 h-12 flex-shrink-0">
      <img 
        src={imageUrl || "/api/placeholder/48/48"}
        alt={name}
        className="w-full h-full rounded-full object-cover"
      />
    </div>

    {/* Name and Rating */}
    <div className="ml-4 flex-grow flex justify-between items-center">
      <span className="font-medium text-gray-800">{name}</span>
      <div className="flex items-center">
        <Star size={16} className="text-red-500 fill-current" />
        <span className="ml-1 text-gray-600">{rating}</span>
      </div>
    </div>
  </div>
);

const Buddies = () => {
  const buddies = [
    {
      name: "Sarah Johnson",
      rating: "4.8",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "Michael Chen",
      rating: "4.7",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "Emma Wilson",
      rating: "4.9",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "Alex Thompson",
      rating: "4.6",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "Jessica Brown",
      rating: "4.8",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "David Kim",
      rating: "4.7",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "Lisa Anderson",
      rating: "4.9",
      imageUrl: "/api/placeholder/48/48"
    },
    {
      name: "James Martinez",
      rating: "4.8",
      imageUrl: "/api/placeholder/48/48"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Buddies</h1>
        </div>
      </div>

      {/* Buddies List */}
      <div className="p-4">
        {buddies.map((buddy, index) => (
          <BuddyListItem 
            key={index}
            name={buddy.name}
            rating={buddy.rating}
            imageUrl={buddy.imageUrl}
            onClick={() => alert('hello!')}
          />
        ))}
      </div>
    </div>
  );
};

export default Buddies;