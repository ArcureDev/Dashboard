import {useState} from "react";
import Register from "../components/register/register.tsx";
import {createLazyFileRoute} from "@tanstack/react-router";
import Login from "../components/login/login.tsx";

type LogisterType = 'LOGIN' | 'REGISTER';

export const Route = createLazyFileRoute('/logister')({
    component: Logister,
})

export default function Logister() {
    const [type, setType] = useState<LogisterType>('REGISTER');

    const element = type === 'REGISTER'
        ? <Register/>
        : <Login/>

    const buttonLabel = type === 'REGISTER' ? 'Se connecter' : 'Inscription';

    function switchType() {
        if (type === 'REGISTER') {
            setType('LOGIN');
            return;
        }
        setType('REGISTER');
    }

    return (
        <>
            <button onClick={() => {switchType()}}>{buttonLabel}</button>
            {element}
        </>
    )
}