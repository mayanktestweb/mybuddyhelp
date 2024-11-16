import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ActivityCard = ({ activity, points }) => (
  <div className="bg-white rounded-lg shadow-md mb-4 p-4">
    <div className="flex flex-col">
      <span className="text-gray-800 text-lg">{activity}</span>
      <span className="text-red-500 font-medium mt-1">{points} pts</span>
    </div>
  </div>
);

const ActivityCategoryPage = () => {

    const [categoryTitle, setCategoryTitle] = useState();
    const location = useLocation();
    console.log(location.pathname)

    useEffect(() => {
        if (location.pathname == '/activity_category/exercise') {
            setCategoryTitle('Exercise')
        } else if (location.pathname == '/activity_category/meal') {
            setCategoryTitle('Healthy Meal Planning')
        } else if (location.pathname == '/activity_category/hobby') {
            setCategoryTitle('Hobbies And Fun')
        } else {
            setCategoryTitle('Sleeping Routines')
        }
    }, [location]);

  const activities = [
    { activity: "Playing Football", points: 150 },
    { activity: "Morning Jogging", points: 100 },
    { activity: "Swimming", points: 200 },
    { activity: "Cycling", points: 120 },
    { activity: "Basketball", points: 150 },
    { activity: "Gym Workout", points: 180 },
    { activity: "Yoga Session", points: 100 },
    { activity: "Tennis Match", points: 160 },
    { activity: "Dance Class", points: 140 },
    { activity: "Hiking", points: 200 }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-sm z-10">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">{categoryTitle}</h1>
        </div>
      </div>

      {/* Scrollable Activity List */}
      <div className="flex-1 p-4 overflow-y-auto">
        {activities.map((activity, index) => (
          <ActivityCard 
            key={index}
            activity={activity.activity}
            points={activity.points}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityCategoryPage;