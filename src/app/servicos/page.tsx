'use client'
import { HeaderInterno } from "@/components/HeaderInterno";
import { InputPesquisa } from "@/components/InputPesquisa"
import { ItemServiços } from "@/components/ItemServiços";
import { ServicosI } from "@/utils/types/servicos";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { useClienteStore } from "@/context/cliente";

export default function Home() {
  const [servicos, setServicos] = useState<ServicosI[]>([])
  const { logaCliente } = useClienteStore()

  useEffect(() => {
    
    async function buscaCliente(idCliente: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/${idCliente}`)
      if (response.status == 200) {
        const dados = await response.json()
        logaCliente(dados)
      }
    }

    if (localStorage.getItem("client_key")) {
      const idClienteLocal = localStorage.getItem("client_key") as string
      buscaCliente(idClienteLocal)
    } 
    
    async function buscaDados() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/servicos`)
      const dados = await response.json()
      setServicos(dados)

    } 
    buscaDados()
  }, [])

  const listaServicos = servicos.map( servico => (
    <ItemServiços data={servico} key={servico.id} />
  ))

  return (
     <main>

        <HeaderInterno />

        <InputPesquisa setServicos={setServicos} />
        
        <section className="mt-5 mb-5 max-w-screen-xl mx-auto">
          <div className="flex flex-row justify-between">
            <h1 className="mt-5 mb-5 text-3xl font-extrabold leading-none tracking-tight text-blue-500 md:text-3xl lg:text-4xl dark:text-white">Procedimentos Cadastrados </h1>
            <a href="/novoProcedimento" className="w-44 text-white bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center m-5">
                  + Procedimentos
            </a>
          
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {listaServicos}

          </div>
        </section>
      
        <Toaster position="top-right" richColors  />
     </main>
  );
}