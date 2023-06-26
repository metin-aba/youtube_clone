import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import {Navbar,Feed,VideoDetail,ChannelDetail,SearchFeed} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
        <Navbar/>
          <Router>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/'  element={<VideoDetail/>}/>
          <Route path='/'  element={<ChannelDetail/>}/>
          <Route path='/'  element={<SearchFeed/>}/>
        
        </Router>
      </Box>
    </BrowserRouter>
  )
}

export default App
