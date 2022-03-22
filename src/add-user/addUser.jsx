import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from 'react';
import React from 'react';

function AddUser(){
    const [login,setLogin]=useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [confirmasenha,setConfirmaSenha] = useState("")
    const SubmitUser = () =>{
        var user = {
            "name":login,
            "email":email,
            "password":senha
        }
        console.log(user)
    }
    return(
        <div className="Body">
            <h1>Novo Usuario</h1>
            <p>Login:</p>
            <InputText value={login} onChange={(e)=>setLogin(e.target.value)}/>
            <p>Email:</p>
            <InputText value={email} type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <p>Senha:</p>
            <InputText type='password'value={senha} onChange={(e)=>setSenha(e.target.value)}/>
            <p>Confirmar senha:</p>
            <InputText type='password'value={confirmasenha} onChange={(e)=>setConfirmaSenha(e.target.value)}/>
            <br />
            <Button  icon="pi pi-check" onClick={SubmitUser}/>
        </div>
    )

}
export default AddUser