import './App.css'
import logo from './assets/logo.webp';

function App() {

  return (
    <main className="scroll-smooth selection:bg-[#F15524]   ">
      <section
        id="grid"
        className="w-[100svw] min-h-[100svh] flex justify-center overflow-hidden bg-[#f7eee3] bg-[linear-gradient(to_right,#0c0c0c16_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c16_1px,transparent_1px)] bg-[size:56px_56px] text-[#0c0c0c]  "
      >
        <div className="max-w-full l m-2 p-3 flex flex-col items-center justify-around ">
          {/* Navbar */}
          <nav className="flex justify-stretch bg-[#1f1f1f] rounded-full item-center fixed top-0 m-2 p-2   gap-5  z-10 drop-shadow-4xl">
            <img src={logo} width={80} height={80} alt="logo" />
            <button className="border-[#F15524] border-2 px-4 py-2 bg-[#F15524] rounded-full transition-all hover:bg-[#F15524] hover:text-white">
              Join Watchlist
            </button>
          </nav>


          {/* Heading */}
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

    
      
    </main>

  )
}

export default App
