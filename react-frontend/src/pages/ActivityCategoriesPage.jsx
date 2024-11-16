import React from 'react';
import { ArrowRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';

const ActivityCategoryCard = ({ title, score, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
    <div className="flex h-32">
      {/* Image Area - Full height, no padding */}
      <div className="w-32 flex-shrink-0">
        <img 
          src={imageUrl || "/api/placeholder/128/128"} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Area - Maintained padding */}
      <div className="flex-grow flex flex-col p-4">
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Score Earned: {score}</p>
        
        {/* See Today's Activities Link */}
        <div className="mt-auto flex justify-end">
          <button className="text-red-500 text-sm font-medium flex items-center hover:text-red-600">
            See Today's Activities
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ActivityCategoriesPage = () => {
  const activities = [
    {
      title: "Exercise",
      score: "150 pts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSajvciv-52WyA0Un6eQIw78CAJgD67rgweA&s"
    },
    {
      title: "Healthy Meal Planning",
      score: "200 pts",
      imageUrl: "https://svgsilh.com/svg/2085075.svg"
    },
    {
      title: "Hobbies And Fun",
      score: "100 pts",
      imageUrl: "https://cdn.iconscout.com/icon/premium/png-256-thumb/hobbies-1651245-1403352.png?f=webp&w=256"
    },
    {
      title: "Sleeping Routines",
      score: "120 pts",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZM0h9kWNfSvtrnzOlls5uTyicMnvjwgBuw&s"
    }
  ];

  return (
    <>
        
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-white p-4 shadow-sm mb-4">
                <div className="flex justify-between items-center max-w-lg mx-auto">
                    <span className="font-bold text-gray-800 text-lg">Total Score</span>
                    <span className="font-bold text-red-500 text-xl">570 pts</span>
                </div>
            </div>
            <div className="p-4">
                {activities.map((activity, index) => (
                    <ActivityCategoryCard 
                    key={index}
                    title={activity.title}
                    score={activity.score}
                    imageUrl={activity.imageUrl}
                    />
                ))}
            </div>
        <div style={{height: '200px'}}></div>
        </div>
        <BottomNav />
    </>
  );
};

export default ActivityCategoriesPage;