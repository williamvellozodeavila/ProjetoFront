"use client"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { useClienteStore } from "@/context/cliente"

type Inputs = {
  email: string
  senha: string
  manter: boolean
}

export default function Login() {
  const { register, handleSubmit } = useForm<Inputs>()
  const { logaCliente } = useClienteStore()
  const router = useRouter()

  async function verificaLogin(data: Inputs) {
    // console.log(data)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/clientes/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ email: data.email, senha: data.senha })  
    })
//    console.log(response)
    if (response.status == 200) {
      const dados = await response.json()
      // console.log(dados)
//      alert("Olá " + dados.nome)

      // "coloca" os dados do cliente no contexto 
      logaCliente(dados)

      // se indicou que quer manter conectado, vamos salvar o id em localStorage
      if (data.manter) {
        localStorage.setItem("client_key", dados.id)
      } else {
        if (localStorage.getItem("client_key")) {
          localStorage.removeItem("client_key")
        }
      }     

      router.push("/servicos")
    } else {
      alert("Erro... Login ou Senha incorretos")
    }
  }

  return (
    <main>
    
  

    <div className="w-screen h-screen bg-gradient-to-r from-blue-400 to-white flex items-center justify-center">
      <div className="w-1/3">
        <h1 className="font-bold text-6xl text-white mb-6">Gestão Studio</h1>
        <h2 className="font-bold text-4xl text-white w-30">O seu sistema de gestão,
        personalizado do seu jeito</h2>
      </div>
      
      <div className="flex-col items-center w-1/4 ml-10 shadow-lg">
        <div className="w-full bg-gray-100 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="space-y-4 md:space-y-6" 
              onSubmit={handleSubmit(verificaLogin)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail:</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome@exemplo.com" 
                  required 
                  {...register("email")} />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha:</label>
                <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
                {...register("senha")} />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                    {...register("manter")} />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Manter Conectado
                    </label>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-row">             
                <button type="submit" className="blue-button">
                  Entrar
                </button>
                <a href="/alterar-senha" className="dark-button">
                  Esqueci a senha
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}