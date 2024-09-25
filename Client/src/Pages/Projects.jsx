import { useEffect, useState } from "react"
import Addcomponent from "../Component/Addcomponent"
import Navbar from "../Component/Navbar"
import Projectcard from "../Component/Projectcard"
import { getProjects } from "../service/api"
const Projects = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);
      // toast('Error');
    }
  }
  // console.log(projectdata)


  useEffect(() => {
    fetchprojects()
  }, [])
  return (
    <>
      <Navbar />
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-end items-center px-10">
          <Addcomponent fetchprojects={fetchprojects} />
        </div>
        {projectdata ?
          (
            <>
              {
                projectdata?.map((data, index) => (
                  <Projectcard title={data.title} desc={data.desc} key={index} pid={index} cover={data.coverimg} id={data.id} link={data.link}/>
                ))
              }
            </>

          ) : (
            <>
              no data available
            </>
          )

        }
      </div >
{/* /users */}
      {/* <Toaster richColors /> */}
    </>
  )
}

export default Projects