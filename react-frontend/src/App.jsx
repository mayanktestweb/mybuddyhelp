import React from 'react'
import { Route, Router, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import PostsPage from './pages/PostsPage'
import Buddies from './pages/Buddies'
import Notifications from './pages/Notifications'
import Profile from './pages/Profile'
import ActivityCategoriesPage from './pages/ActivityCategoriesPage'
import ActivityCategoryPage from './pages/ActivityCategoryPage'



const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} >
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='progress' element={<ActivityCategoriesPage />} />
        <Route path='buddies' element={<Buddies />} />
        <Route path='notifications' element={<Notifications />} />
        <Route path='profile' element={<Profile />} />
      </Route>
      <Route path='/activity_category/:category' element={<ActivityCategoryPage />} />
    </Routes>
  )
}

export default App