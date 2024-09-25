import { Pencil, Trash } from 'lucide-react';
import React, { useState } from 'react';
import { deleteProject, editProject } from '../service/api';

export const Projectcard = ({id, title, cover, desc, link, fetchprojects }) => {
  const [titleState, settitleState] = useState(title);
  const [coverState, setcoverState] = useState(cover)
  const [descState, setdescState] = useState(desc);
  const [linkState, setlinkState] = useState(link)
  const [visible, setvisible] = useState(false)

  const handleeditproject = async (e) => {
    e.preventDefault();
    const projectdata = {
      title: titleState,
      cover: coverState,
      desc: descState,
      link: linkState
    }
    try {
      const response = await editProject(id, projectdata)
      console.log(response.status)
      if (response.status === 200) {
        console.log("updated")
        fetchprojects()
      }
    } catch (error) {
      console.warn(error)
    }
    setvisible(false)
  }
  const handleDelete = async (id) => {
    try {
      const response = await deleteProject(id)
      console.log(response.status)
      if (response.status === 200) {
        console.log("Deleted")
        fetchprojects()
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <>
      <div className="service-card w-[300px] h-[300px] shadow-xl cursor-pointer snap-start shrink-0 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
        <img src={cover} alt={title} className='h-[150px] w-[100%] relative' />

        <p className="font-bold text-2xl group-hover:text-white text-black/80  px-6">
          {title}
        </p>
        <p className="text-gray-400 text-sm  px-6">
          {desc}
        </p>
        <div className="flex flex-row gap-4">
          <div className="overflow-x-visible relative w-12 h-12 group text-center hover:bg-blue-500/20 rounded-sm hover:border-b-2 hover:border-blue-500" onClick={() => setvisible(true)}>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
              <Pencil />
            </div>
            <div className="absolute text-white font-bold bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
              Edit
            </div>
          </div>

          <div className="overflow-x-visible relative w-12 h-12 overflow-y-clip group text-center hover:bg-red-500/20 rounded-sm hover:border-b-2 hover:border-red-500" onClick={() => { handleDelete(id) }}>
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-500 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top text-white">
              <Trash />
            </div>
            <div className="absolute text-white font-bold bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0">
              Delete
            </div>
          </div>
        </div>

      </div>
      {
        visible && (
          <>
            <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
              <div className=" h-[80%] w-[30%] bg-red z-50 flex flex-col  bg-blue-400  shadow-lg ">
                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-blue-500 bg-white text-xl font-bold shadow-sm">
                  <div className="w-1/2">
                    Edit Project
                  </div>
                  <div className="w-1/2 flex justify-end">
                    <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="peer bg-rose-400 w-8 h-8 rounded-full shadow-md transition-all duration-300 peer-checked:bg-emerald-500">
                        <div className="absolute top-1 left-1 h-6 w-6 bg-white rounded-full transition-transform peer-hover:scale-75 peer-checked:rotate-0 -rotate-180 flex justify-center items-center">
                          <span className="peer-checked:content-['✔️']"></span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                  <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleeditproject}>
                    <input
                      type="text"
                      value={titleState}
                      onChange={(e) => settitleState(e.target.value)}
                      placeholder="Title"
                      className="p-3 bg-[#f8f8f8] w-full font-bold"
                      required
                    />
                    <input
                      type="text"
                      value={descState}
                      onChange={(e) => setdescState(e.target.value)}
                      placeholder="Description"
                      className="p-3 bg-[#f8f8f8] w-full font-bold"
                      required
                    />
                    <input
                      type="text"
                      value={linkState}
                      onChange={(e) => setlinkState(e.target.value)}
                      placeholder="Project Link"
                      className="p-3 bg-[#f8f8f8] w-full font-bold"
                      required
                    />
                    <input
                      type="text"
                      value={coverState}
                      onChange={(e) => setcoverState(e.target.value)}
                      placeholder="Cover URL"
                      className="p-3 bg-[#f8f8f8] w-full font-bold"
                      required
                    />
                    <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">Update Project</button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )
      }

    </>
  )
}

export default Projectcard