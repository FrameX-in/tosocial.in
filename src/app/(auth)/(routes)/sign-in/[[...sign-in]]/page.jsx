import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
 
export default function Page() {
  return (
    <>
    {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

{/* <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="Pattern"
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside> */}

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        {/* <a className="block text-primary" href="/">
          <span className="sr-only">Home</span>
          <Image src='logo.svg' alt='logo' height={30} width={50} priority/>
        </a> */}

        <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl text-center">
          Welcome to Social
        </h1>

        

        <SignIn />
      </div>
    </main>
  {/* </div>
</section> */}
    
    </>
  )
  
  ;
}