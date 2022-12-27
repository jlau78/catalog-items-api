import React, {useState, useEffect} from 'react';
import AddItem from './components/AddItem'
import {getItems, addItem, updateItem, deleteItem} from "./API"
import logo from './logo.svg';
import './App.css';


const App: React.FC = () => {
  const [items, setItems] = useState<IItem[]>([])

  useEffect(() => {
    fetchItems()
  }, []);

  const fetchItems = (): void => {
    getItems()
    .then(({data: {items}}: IItem[] | any) => setItems(items))
    .catch((err: Error) => console.log(err))
  }

  return (
    <div className="root">
      hello

    </div>
  )
}


export default App;
