import './App.css'
import logo from './assets/logo.webp'
import block from './assets/block.svg'
import tw from './assets/12.svg'
import pla from './assets/pla.svg'


function App() {

  return (
    <main className="scroll-smooth selection:bg-[#F15524] overflow-hidden  ">
      <section
        id="grid"
        className="w-[100svw] min-h-[100svh] flex justify-center overflow-hidden bg-[#f7eee3] bg-[linear-gradient(to_right,#0c0c0c16_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c16_1px,transparent_1px)] bg-[size:56px_56px] text-[#0c0c0c]  ">
        <div className="max-w-full l m-2 p-3 flex flex-col items-center justify-around ">
          {/* Navbar */}
          <nav className="flex justify-stretch bg-[#1f1f1f] rounded-full item-center fixed top-0 m-2 p-2   gap-5  z-10 drop-shadow-4xl">
            <img src={logo} width={80} height={80} alt="logo" />
            <button className="border-[#F15524] border-2 px-4 py-2 bg-[#F15524] rounded-full transition-all hover:bg-[#F15524] hover:text-white">
              Join Watchlist
            </button>
          </nav>
          <div>
            <h1 className="text-[2.25rem]  leading-tight text-center   font-Instrument font-medium mb-4  selection:bg-[#F15524] selection:text-[#0c0c0c] ">
              A Intelligent Companion for Students and Teachers
              <span className="text-[#F15524]">.</span>
            </h1>
            <p className="text-[1rem] text-center text-[#0c0c0c]   text-pretty ">
              AI-powered knowledge management platform offering powerfull
              intuitive tools designed to enhance productivity for both students
              and teachers
            </p>
          </div>
        </div>
      </section>


<section className="w-full min-h-screen flex justify-center items-center bg-[#0c0c0c]">
  <div className="max-w-full  m-2 p-2 flex flex-col items-center ">
    <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col ">
      <div className="p-2">
        <h1 className="text-[2.25rem]  leading-tight font-Instrument font-medium ">Intelligences.</h1>
        <p className="text-[1rem] text-pretty ">
        it dives deep into the entire your space to find exactly what you need,or summaries of complex topics, or quick answers to challenging questions,
        </p>
      </div>
      <div className="p-2 m-1 ">
        <img
          src={tw}
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
    </div>

    <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col ">
      <div className="p-2">
        <h1 className="text-[2.25rem]  leading-tight font-Instrument font-medium ">Planner.</h1>
        <img
          src={pla}
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="p-2 ">
        <h1 className="text-[2.25rem]  leading-tight font-Instrument font-medium ">Community.</h1>
        <img
          src={pla}
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>

    <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col-reverse">
      <div className="p-10 m-2 ">
        <img
          src={block}
          width={700}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className="p-2">
        <h1 className="text-[2.25rem]  leading-tight font-Instrument font-medium ">Repos.</h1>
        <p className="text-[1rem] text-pretty  ">
          Acces all notes,question papers and other documentation in
          one centralized location.
        </p>
      </div>
    </div>
  </div>
</section>



    </main>

  )
}

export default App
