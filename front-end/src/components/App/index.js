import './App.css';
import useGetMovies from "../../hooks/UseGetMovies";
import Button from "../Button";
import SearchInput from '../SearchInput';
import React, {useState, useContext} from 'react';
import FilmList from "../FilmList"


function App() {
  
  const [search, setSearch] = useState("");
  //const [data, setData] = useState("");

  const data = useGetMovies(search)

console.log(data);

  function onClick() {

    throw Error();

  }
 

  
  return (
    <div className="App">
      
    <Button name={"Add Movie"} onClick={onClick}/>
    <Button name={"Save Movie"} onClick={onClick}/>
    
    <SearchInput value={search} setValue={setSearch} />
    <FilmList data={data}/>

    </div>
  );
}

export default App;
