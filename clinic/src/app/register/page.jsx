'use client'
import Link from "next/link"
import { useRef, useState } from "react"

export default function Page() {

    const RefName = useRef(null);
    const RefLastname = useRef(null);
    const RefPassowrd = useRef(null);
    const RefConfirmPassord = useRef(null);
    const RefEmail = useRef(null);
    const normal = 'border-zinc-200'

    const validateForm = () => {
        // I's possible abstract more this function separating on serveral others functions
        if(RefName.current.value === '' || RefName.current.value.length <= 3) {
            RefName.current.classList.remove('border-zinc-200');
            RefName.current.classList.add('border-red-200');
        } else {
            RefName.current.classList.remove('border-zinc-200');
            RefName.current.classList.add('border-green-200');
        }

        if(RefLastname.current.value === '' || RefLastname.current.value.length <= 3){
            RefLastname.current.classList.remove('border-zinc-200');
            RefLastname.current.classList.add('border-red-200');
        } else {
            RefLastname.current.classList.remove('border-zinc-200');
            RefLastname.current.classList.add('border-green-200');
        }

        if(RefPassowrd.current.value === '' || RefPassowrd.current.value.length < 8){
            RefPassowrd.current.classList.remove('border-zinc-200');
            RefPassowrd.current.classList.add('border-red-200');
        } else {
            RefPassowrd.current.classList.remove('border-zinc-200');
            RefPassowrd.current.classList.add('border-green-200');
        }

        if(RefConfirmPassord.current.value != RefPassowrd.current.value) {
            RefConfirmPassord.current.classList.remove('border-zinc-200');
            RefConfirmPassord.current.classList.add('border-red-200');
        } else {
            RefConfirmPassord.current.classList.remove('border-zinc-200');
            RefConfirmPassord.current.classList.add('border-green-200');
        }

        if(!RefEmail.current.validity.valid || RefEmail.current.value === '') {
            RefEmail.current.classList.remove('border-zinc-200');
            RefEmail.current.classList.add('border-red-200');
        } else {
            RefEmail.current.classList.remove('border-zinc-200');
            RefEmail.current.classList.add('border-green-200');
        }
    }

    return(
        <div className="w-screen h-auto bg-slate-200 py-10 flex justify-center items-center">
            <form action=""className="w-[80%] h-fit p-5 bg-white shadow-md rounded-md flex flex-col items-center gap-5">
                <div>
                    <h1 className="w-full text-center font-bold">Cadastrar-se</h1>
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="name">Nome</label>
                    <input ref={RefName} className={`text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400  outline-none border ${normal} rounded-sm w-[95%]`} type="text" placeholder="Digite seu nome" id="name" nome="name" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="lastname">Sobrenome</label>
                    <input ref={RefLastname} className={`text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  ${normal}  rounded-sm w-[95%]`} type="text" placeholder="Digite seu sobrenome" id="lastname" name="lastname" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="password">Senha</label>
                    <input ref={RefPassowrd} className={`text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  ${normal}  rounded-sm w-[95%]`} type="password" placeholder="Digite sua senha" id="password" name="passwrod" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="password_confirm">Confirme sua senha</label>
                    <input ref={RefConfirmPassord} className={`text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  ${normal}  rounded-sm w-[95%]`} type="password" placeholder="Confirme sua senha" id="password_confirm" name="passowrd confirm" />
                </div>
                <div className="flex w-full h-auto items-center flex-col gap-2">
                    <label className="relative left-[3%] text-sm font-medium self-start" htmlFor="email">Email</label>
                    <input ref={RefEmail} className={`text-sm pl-2 placeholder:text-gray-300 py-1 placeholder:text-[12px] placeholder:px-1 focus:border-zinc-400 outline-none border  border-zinc-200 rounded-sm w-[95%]`} type="email" name="email" placeholder="Digite seu Email" id="email" />
                </div>
                <div className="self-start flex gap-1 relative left-[2%]">
                    <input type="checkbox" name="term" id="terms" className="accent-blue-400" />
                    <label className="text-sm font-medium" htmlFor="terms">Termos de uso</label>
                </div>
                <div>
                    <Link href={`#`}>                    
                        <button onClick={validateForm} className="bg-blue-400 text-white font-bold w-fit h-fit py-1 px-4 rounded-md shadow-sm">
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}