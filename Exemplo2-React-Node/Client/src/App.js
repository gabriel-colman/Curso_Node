import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";
import Card from './components/cards/card';


function App() {
  const [values, setValues] = useState();
  console.log(values);
  const handleChangeValues = value => {
    setValues(prevValue=>({
      ...prevValue,
      [value.target.name]:value.target.values,
    }))
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((Response)=>{
      console.log(Response);
    })
  })

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register",{
      name:values.name,
      cost:values.cost,
      category:values.category,
    }).then((Response) =>{
      console.log(Response);
    });
  }

  return (
    <div className="app--Conteiner">
      <div className='register--conteiner'>
        <h1 className='register--title'>Scrim Shoping</h1>

        <input type="text"
          name="name"
          placeholder='Nome'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input type="text"
          name="cost"
          placeholder='preco'
          className='register--input'
          onChange={handleChangeValues}
        />
        <input type="text"
          name="category"
          placeholder='categoria'
          className='register--input'
          onChange={handleChangeValues}
        />
        <button className='register--button' onClick={() =>handleClickButton}>
          Cadastrar
        </button>


      </div>

      <Card></Card>
    </div>
  );
}

export default App;
