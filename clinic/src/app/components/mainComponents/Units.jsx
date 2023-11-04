'use client'
import { useRef,useState } from "react"

export const Units = () => {

    const MyRef = useRef(null)
    const [state, setState] = useState('')

    return (
        <section className="flex flex-col items-center gap-5 w-screen h-auto p-4">
            <div className="w-full font-bold text-[17px] text-center">
                <h1>
                    Encontre a unidade mais próxima <br />
                    de você.
                </h1>
            </div>
            <div className="w-full h-auto flex gap-2 justify-center">
                <select ref={MyRef} name="estado" id="" className="outline-none bg-white border rounded-md border-gray-300 p-2">
                    <option value="-" disabled selected>Escolha seu estado</option>
                    <option value="joão pessoa">Paraíba</option>
                    <option value="Manaus">Amazonas</option>
                    <option value="Rio Branco">Acre</option>
                    <option value="Porto Velho">Rondônia</option>
                    <option value="Cuiabá">Mato Grosso</option>
                    <option value="Boa Vista">Roraima</option>
                    <option value="Belém">Pará</option>
                    <option value="Campo Grande">Mato Grosso do Sul</option>
                    <option value="Curitiba">Paraná</option>
                    <option value="Porto Alegre">Rio Grande do Sul</option>
                    <option value="Florianópolis">Santa Catarina</option>
                    <option value="São Paulo">São Paulo</option>
                    <option value="Belo Horizonte">Minas Gerais</option>
                    <option value="Salvador">Bahia</option>
                    <option value="Teresina">Piaui</option>
                    <option value="São Luiz">Maranhão</option>
                    <option value="Palmas">Tocantins</option>
                    <option value="Macapá">Amapá</option>
                    <option value="Goiânia">Goiás</option>
                    <option value="Rio de Janeiro">Rio de Janeiro</option>
                    <option value="Vitória">Espírito Santo</option>
                    <option value="Fortaleza">Ceará</option>
                    <option value="Natal">Rio Grande do Norte</option>
                    <option value="Recife">Pernambuco</option>
                    <option value="Maceió">Alogoas</option>
                    <option value="Aracaju">Sergipe</option>
                </select>
                <button onClick={() => {setState(MyRef.current.value)}}className="bg-blue-400 font-medium rounded-md p-2 text-white text-sm">
                    procurar
                </button>
            </div>
            <div className="font-medium w-full flex items-center justify-center flex-col gap-3">
                Unidade mais próxima fica em:
                <span className="text-white font-bold bg-blue-500 rounded-lg w-fit h-fit py-1 px-3">{ state }</span>
            </div>
        </section>
    )
}