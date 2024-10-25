import './App.css'
import logo from './assets/logo.webp'
import block from './assets/block.svg'
import tw from './assets/aii.svg'
import pla from './assets/pla.svg'
import edi from './assets/editior.svg'
import circle from './assets/circle.svg'
import { useState } from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [name, setname] = useState('');
  const handleSummit = (e) => {
    e.preventDefault();
    console.log(name);

    const data = {
      Name: name
    }

    axios.post('https://api.sheetbest.com/sheets/701ac22e-9f5d-4bc3-8def-8dab0baa3abb', data).then((Response) => {
      console.log(Response);
      setname('');
      toast.success('Successfully joined the waitlist! 🎉');

    })
  }
  const bottomSectionRef = useRef(null);

  const scrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the bottom
  };

  return (
    <main className="scroll-smooth selection:bg-[#F15524] overflow-hidden select-none font-display: swap  ">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick />



      <section
        id="grid"
        className="w-[100svw] h-[100svh] flex justify-center overflow-hidden bg-[#f7eee3] bg-[linear-gradient(to_right,#0c0c0c16_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c16_1px,transparent_1px)] bg-[size:56px_56px] text-[#0c0c0c]  ">
        <div className="max-w-full l m-2 p-3 flex flex-col items-center justify-evenly ">


          {/* Navbar */}
          <nav className="flex justify-stretch bg-[#1f1f1f] rounded-full item-center fixed top-0 m-2 p-2  gap-5 z-10 drop-shadow-4xl">
            <img src={logo} width={100} height={100} alt="logo" />
            <button className="border-[#F15524] border-2 px-4 py-2 bg-[#F15524] rounded-full transition-all hover:bg-[#F15524] hover:text-white" onClick={scrollToBottom}>
              Join waitlist
            </button>
          </nav>
          <div className='flex flex-col items-center justify-center lg:max-w-[90svw] '>
            <h1 className="text-[2.25rem]  leading-tight text-center   font-Instrument italic font-medium mb-4  selection:bg-[#F15524] selection:text-[#0c0c0c] sm:text-6xl lg:max-w-[70%]  ">
              An Intelligent Companion for Students and Teachers
              <span className="text-[#F15524]">.</span>
            </h1>
            <p className="text-[1rem] text-center text-[#0c0c0c]   text-pretty  sm:text-[1.5rem] lg:max-w-2xl  ">
              AI-powered knowledge management platform offering powerfull
              intuitive tools designed to enhance productivity for both students
              and teachers
            </p>
          </div>



          


        </div>
      </section>


      <section className="w-full min-h-screen flex justify-center items-center bg-[#0c0c0c]">
        <div className="max-w-full  m-2 p-2 flex flex-col items-center ">
          <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col lg:flex-row ">
            <div className="p-2 sm:p-4">
              <h1 className="text-[2.25rem] text-[#f7eee3] leading-tight font-Instrument font-medium sm:text-6xl ">Intelligences<span className='text-[#F15524]'>.</span></h1>
              <p className="text-[1rem] text-[#f7eee3] text-pretty sm:text-[1.5rem]">
                It explores your entire space to find exactly what you need—whether its detailed summaries of complex topics or quick, clear answers to challenging questions.
              </p>
            </div>
            <div className="p-2 m-1 lg:pb-20 ">
              <img
                src={tw}
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
          </div>

          <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col lg:flex-row  ">
            <div className="p-2 border-[#232323] lg:border-r-2">
              <h1 className="text-[2.25rem]  leading-tight font-Instrument text-[#f7eee3] font-medium sm:text-6xl ">Planner<span className='text-[#F15524]'>.</span></h1>
              <img
                src={pla}
                width={700}
                height={500}
                alt="Picture of the author"
              />
            </div>

            <div className="p-2 flex-row items-center justify-center  w-1/2 ">
              <h1 className="text-[2.25rem] text-[#f7eee3] leading-tight font-Instrument font-medium sm:text-6xl sm:pb-3">Community<span className='text-[#F15524]'>.</span></h1>
              <div className='flex items-center justify-center  p-2'>
                <img
                  src={circle}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className='items-center'
                />
              </div>

            </div>
          </div>

          <div className="flex  gap-2 border-b-1 border-t-2 p-1 w-full border-[#232323] flex-col-reverse lg:flex-row">
            <div className="p-10 m-2 ">
              <img
                src={block}
                width={700}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className="p-2">
              <h1 className="text-[2.25rem] text-[#f7eee3] leading-tight font-Instrument font-medium sm:text-6xl ">Repos<span className='text-[#F15524]'>.</span></h1>
              <p className="text-[1rem] text-[#f7eee3] text-pretty sm:text-[1.5rem] ">
                Access all notes,question papers and other documentation in
                one centralized location.
              </p>
            </div>
          </div>

          <div className="flex  gap-2 border-b-2 border-t-2 p-1 w-full border-[#232323] flex-col lg:flex-row  ">
            <div className="p-2 w-full  lg:flex lg:items-center lg:justify-center ">

              <img
                src={edi}
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
          </div>



        </div>
      </section>


      <section className='w-[100svw] h-[100svh] flex justify-center overflow-hidden bg-[#f7eee3] items-center' ref={bottomSectionRef}>
        <div className='className="max-w-full l m-2 p-3 flex flex-col items-right justify-around gap-4 '>

          <h1 className='text-5xl text-[#0c0c0c] font-Instrument'>Crafted for your learning needs <span className='text-[#F15524]'>.</span></h1>
          <div className='flex w-[80svw]  items-center  gap-2 p-4'>
            <form action="" className='text-[#0c0c0c]' onSubmit={handleSummit}  >
              <input type="email" name="" id="" className='outline-none  h-12 rounded-md p-3 bg-[#0c0c0c] text-[#ffffff] placeholder-[#fff]' placeholder='your@mail.com' onChange={(e) => setname(e.target.value)} value={name} autoComplete='on' />
            </form>
            <button type="submit" className='bg-[#F15524] px-5 py-3 rounded-md' onClick={handleSummit}>join</button>


          </div>


        </div>
      </section>


    </main>

  )
}

export default App
