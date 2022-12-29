import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemListing from "./components/SearchListing"
import AppRoutes from "././routes/Routes"
import {BrowserRouter as Routes, Route} from 'react-router-dom';


export default function App() {

    return(
        <div>
          <ItemListing />

        </div>

    )
}
