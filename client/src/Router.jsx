import React from 'react';
import Item from './components/Item';
import {Routes, Route} from 'react-router-dom';

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Item/>} />
    </Routes>
  )
}

export default Router