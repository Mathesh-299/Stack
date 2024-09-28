import { CircleX, Plus } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addProject } from '../service/api'

const Addcomponent = ({ fetchprojects }) => {
  const titleref = useRef(null)
  const descref = useRef(null)
  const linkref = useRef(null)
  const coverref = useRef(null)
  const gitref = useRef(null)

  const handleAdd = async (e) => {
    e.preventDefault();
    const projectdata = {
      title: titleref.current.value,
      desc: descref.current.value,
      link: linkref.current.value,
      cover: coverref.current.value,
      git:gitref.current.value
    }
    try {
      const response = addProject(projectdata)
      console.log(response.status)
      if ((await response).status === 200) {
        console.log("Added")
      }
      fetchprojects()
    } catch (error) {
      console.log(error)
    }
    console.log(projectdata)
    setvisible(false)
  }
  const [visible, setvisible] = useState(null)
  return (
    <>
      <button onClick={() => setvisible(true)} className='flex h-16 w-16 justify-center items-center mt-3 text-white bg-blue-700 p-1 rounded-sm'>
        <Plus className=' h-8 w-8' />
      </button>
      {
        visible && (
          <div className='w-screen h-screen bg-black/60 flex justify-center items-center absolute top-0 left-0 z-50'>
            <div className='h-[65%] w-[30%] bg-red shadow-lg z-50 flex flex-col bg-gray-300 rounded-md'>
              <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-green-500 bg-gray-50 text-3xl font-bold shadow-lg rounded-md">
                <div className="w-1/2">
                  Add Project
                </div>
                <div className="w-1/2 flex justify-end text-5xl">
                  <label className="relative inline-flex items-center cursor-pointer font-bold " onClick={() => setvisible(!visible)} >
                    <CircleX onClick={() => setvisible(!visible)} className='font-bold text-red-800' />
                  </label>
                </div>
              </div>
              <div className='w-full h-full flex justify-center items-center bg-black/90 rounded-lg' >
                <form className="w-[99%] h-[100%] flex flex-col justify-center items-center gap-3 p-8 " onSubmit={handleAdd}>
                  <input type="text" ref={titleref} name="name" id="title" placeholder="Your Project Title" className=' w-full h-12 bg-[#d1d1d1] outline-none active:outline-none focus:border-b-2 text-xl hover:border-blue-600 p-6 font-bold rounded-sm' required />
                  <input type="text" ref={descref} name="name" id="desc" placeholder="Your Project Desc" className=' w-full h-12 bg-[#d1d1d1] outline-none active:outline-none focus:border-b-2 text-xl hover:border-blue-700 p-6 font-bold rounded-sm' required />
                  <input type="text" ref={linkref} name="name" id="link" placeholder="Your Project Link" className=' w-full h-12 bg-[#d1d1d1] outline-none active:outline-none focus:border-b-2 text-xl hover:border-blue-700 p-6 font-bold rounded-sm' required />
                  <input type="text" ref={coverref} name="name" id="cover" placeholder="Your Project Cover URL" className=' w-full h-12 bg-[#d1d1d1] outline-none active:outline-none focus:border-b-2 text-xl hover:border-blue-700 p-6 font-bold rounded-sm' required />
                  <input type="text" ref={gitref} name="" id="git" placeholder="Git" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
                  <button type="submit"
                    className="submit-btn w-full h-[4rem] bg-green-700 text-black text-2xl font-sans font-bold flex justify-center items-center rounded-lg hover:bg-white mt-4"
                  >Add Project</button>

                </form>
              </div>
            </div>
          </div>

        )}

    </>
  )
}

export default Addcomponent
