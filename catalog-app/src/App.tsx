import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemListing from "./components/SearchListing"
import AppRoutes from "././routes/Routes"
import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';

export default function App() {

    return(
        <div>
          <BrowserRouter>
            <ItemListing />
          </BrowserRouter>
        </div>

    )
}
