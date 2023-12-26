import Button from "@/components/commons/Button"
import Footer from "@/components/commons/Footer"

export default function Home() {
  return (
    <main className="w-full py-10">
      <div className='lg:max-w-6xl mx-auto px-5'>
        <h1 className='font-bold text-center md:text-6xl md:w-7/12 text-4xl mx-auto mt-7'>Ervin Next App Router Starter Kit</h1>
        
        <p className='text-center text-gray-600 mt-5 bg-[#fef08a] p-4 md:w-7/12 mx-auto rounded-md'>Next js 14.0.4 starter kit using, Tailwind CSS, Zustand, SWR, Lint and Formartter 🔮🎉</p>

        <div className="mt-5">
        <Button/>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
