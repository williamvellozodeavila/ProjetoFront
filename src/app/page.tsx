'use client'
import { Header } from "@/components/Header";
import CardPromocao from "@/components/CardPromocao";
import { Footer} from "@/components/Footer";


export default function Home() {




  return (
     <main>
         <Header />
        <div className="flex flex-col items-center mt-20 mx-auto">
            <div className="max-w-xl p-6 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <h5 className="flex items-center text-center mb-2 text-7xl font-bold text-blue-500 dark:text-white">Gestao Studio</h5>
               <p className="flex text-center text-3xl font-normal mt-10 text-gray-500 dark:text-gray-400">Sua plataforma completa para gerenciar, agendar e comandar seu salão.</p>
               <div className="flex flex-row align-center mt-2 px-10 py-10 mx-auto">
               <a href="/cadastro" type="button" className="px-6 py-3.5 text-base mx-10 font-medium text-center  text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Quero começar</a>
               <a href="/login" type="button" className="px-6 py-3.5 text-base font-medium text-center  text-white bg-blue-950 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Já sou cliente</a>
               </div>
            </div>
        
            <div className="flex flex-row items-center mt-20 mb-20 px-10 py-10 mx-auto">
               <div className="max-w-sm p-6 bg-white border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="text-center mb-2 text-4xl font-bold text-blue-500 dark:text-white">Rápido</h5>
                  <p className="m-10 font-normal text-gray-500 dark:text-gray-400">Do cadastro ao primeiro cliente em segundos!</p>
               </div>

               <div className="max-w-sm p-6 bg-white border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="text-center mb-2 text-4xl font-bold  text-blue-500 dark:text-white">Fácil</h5>
                  <p className="m-10 font-normal text-gray-500 dark:text-gray-400">Tudo pelo celular, sem se procupado com agenda de papel</p>
               </div>
               <div className="max-w-sm p-6 bg-white border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                  <h5 className="text-center mb-2 text-4xl font-bold  text-blue-500 dark:text-white">Seguro</h5>
                  <p className="m-10 font-normal text-gray-500 dark:text-gray-400">Seus clientes sao seus. Nós nunca venderemos seus dados</p>
               </div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-20" id="card">
  
              <CardPromocao />
              <CardPromocao />
              <CardPromocao />
              
            </div>

            <div>

            </div>

            <div className="max-w-xl p-6 mb-20 mt-10 bg-white  border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

              <h5 className="flex items-center mb-2 text-5xl font-bold tracking-tight text-blue-950 dark:text-white">Comece hoje mesmo</h5>
              <div className="flex flex-col align-center mt-2 px-10 py-10 mx-auto">
              <a href="/cadastro" type="button" className="px-6 py-3.5 text-base mx-10 font-medium text-center  text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Quero começar</a>
              </div>
            </div>
        </div>
        <Footer />
     </main>
  );
}
