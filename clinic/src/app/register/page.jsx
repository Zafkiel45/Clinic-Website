'use client'
import Link from "next/link"
import { useState } from "react"

export default function Page() {

    const [formDate, setFormDate] = useState({
        name: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        email: '',
    })
    const [formError, setFormError] = useState({
        name: false,
        lastName: false,
        password: false,
        confirmPassword: false,
        email: false,
    })
    const DetectFormsErros = () => {
        const error = {
            name: formDate.name.length < 4 || '',
            lastName: formDate.lastName.length <= 3 || '',
            password: formDate.password.length < 8 || '',
            confirmPassword: formDate.confirmPassword !== formDate.password,
            email: !formDate.email.match(
                /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
            ) 
        }
        setFormError(error)
    }
    const validadeForm = (e) => {
        const {name, value} = e.target;
        setFormDate({
            ...formDate, 
            [name]: value
        })
    }


    return(
        <div className="w-screen h-auto bg-slate-200 py-10 flex justify-center items-center">
            <form action=""className="w-[80%] h-fit p-5 bg-white shadow-md rounded-md flex flex-col items-center gap-5">
                <div>
                    <h1 className="w-full text-center font-bold">Cadastrar-se</h1>
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="name">Nome</label>
                    <input id="name" name="name" onChange={validadeForm} value={formDate.name} className={`${formError.name ? 'border-red-500':'border-green-500'} text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400  outline-none border rounded-sm w-[95%]`} type="text" placeholder="Digite seu nome" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="lastname">Sobrenome</label>
                    <input  value={formDate.lastName} onChange={validadeForm} className={`${formError.lastName ? 'border-red-500':'border-green-500'} text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border rounded-sm w-[95%]`} type="text" placeholder="Digite seu sobrenome" id="lastname" name="lastName" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="password">Senha</label>
                    <input  value={formDate.password} onChange={validadeForm} className={`${formError.password ? 'border-red-500':'border-green-500'} text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  -sm w-[95%]`} type="password" placeholder="Digite sua senha" id="password" name="password" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="password_confirm">Confirme sua senha</label>
                    <input   value={formDate.confirmPassword} onChange={validadeForm} className={`${formError.confirmPassword ? 'border-red-500':'border-green-500'} text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  -sm w-[95%]`} type="password" placeholder="Confirme sua senha" id="password_confirm" name="confirmPassword" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="email">Email</label>
                    <input  value={formDate.email} onChange={validadeForm} className={`${formError.email ? 'border-red-500':'border-green-500'} text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border rounded-sm w-[95%]`} type="email" name="email" placeholder="Digite seu Email" id="email" />
                </div>
                <div className="self-start flex gap-1 relative left-[2%]">
                    <input type="checkbox" name="term" id="terms" className="accent-blue-400" />
                    <label className="text-sm font-medium" htmlFor="terms">Termos de uso</label>
                </div>
                <div>
                    <Link href={`#`}>                    
                        <button onClick={DetectFormsErros} className="bg-blue-400 text-white font-bold w-fit h-fit py-1 px-4 rounded-md shadow-sm">
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}