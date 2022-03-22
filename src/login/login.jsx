import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from 'react';
import React from 'react';
import './style.css'
function Login() {

  const [login,setLogin] = useState('')
  const [senha,setSenha] = useState('')
  const showData = () =>{
    console.log(login)
    console.log(senha)
  }

  return (
    <div className="Body">
      <h1>Tela Simples de login</h1>
      <p>login:</p>
      <InputText value={login} onChange={(e)=> setLogin(e.target.value)} />
      <p>senha:</p>
      <InputText value={senha} type='password' onChange={(e)=> setSenha(e.target.value)}/>
      <br />
      <Button label="Entrar" icon="pi pi-check" iconPos="left" onClick={showData}/>
      <br />
      <Button label="Criar um cadastro" />
    </div>
  )
}

export default Login
