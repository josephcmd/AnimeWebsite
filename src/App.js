
import React, { useState, useEffect } from "react"
import "tailwindcss/tailwind.css"
import { QueryClient, QueryClientProvider } from 'react-query'
import { Search } from "./Search"
import Anime from "./Anime"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
const queryClient = new QueryClient()
 
 
 
 
 export default function App() { 
  
  return (
    <>
     <QueryClientProvider client={queryClient}>
       <Router>
       <Route exact path="/" component={Search}/>
       <Route path="/anime/:id" component={Anime} />
        
       </Router>
     </QueryClientProvider>
     </>
   )
 }