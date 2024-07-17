import Image from "next/image"
import favicon from '@/app/favicon.ico'

const Hero = () => {
  return (
    <section className="h-[100vh] flex items-center justify-center p-10 mx-20">
        <div>
            <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl mb-14">Welcome to <br></br> coding samurai</h1>
            <p className="text-balance">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque eum ipsa vitae excepturi, quod eius itaque ullam fugiat sed rerum molestiae illum exercitationem veniam explicabo, praesentium officiis optio error.</p>
            <button></button>
        </div>
        <div>
            <Image src={favicon} alt="Image" className="hidden md:block" width={450} height={450}/>
        </div>
        
    </section>
    
    
  )
}

export default Hero