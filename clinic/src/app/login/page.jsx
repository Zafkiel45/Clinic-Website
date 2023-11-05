import Link from "next/link"
export default function Page() {
    return (
        <div className="w-[100vw] h-[100vh] bg-slate-200 flex justify-center items-center">
            <form action="" className="bg-white w-[80%] rounded-md shadow-md py-6 px-2 h-fit">
                <div className="w-full  mb-3 h-auto text-center font-bold">
                    <h1>Login</h1>
                </div>
                <div className="w-full flex flex-col gap-3 h-auto p-2">
                    <label htmlFor="user" className="text-[13px] font-bold">Usuário</label>
                    <input type="text" name="user" id="user" className="border border-gray-300 rounded-md"/>
                    <label htmlFor="passoword" className="text-[13px] font-bold">Senha</label>
                    <input type="password" name="password" id='password' className="border border-gray-300 rounded-md" />
                </div>
                <div className="pl-3">
                    <Link href={'#'} className="text-[12px] underline italic font-medium">
                        Não tem uma conta?
                    </Link>
                </div>
                <div className="w-full flex justify-center items-center mt-10 h-fit">
                    <button className="bg-blue-400 w-fit h-fit py-1 px-4 rounded-md text-white font-bold">
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}