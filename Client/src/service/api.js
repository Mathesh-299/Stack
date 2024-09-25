import axios from 'axios'
const API="https://66ee897f3ed5bb4d0bf131b4.mockapi.io"
const getProjects = () => axios.get(`${API}/project/all`)
const getProjectbyID = (id) => axios.get(`${API}/project/${id}`)
const addProject = (projectdata) => axios.post(`${API}/project/add`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/project/edit/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/project/delete/${id}`)
export { addProject, deleteProject, editProject, getProjectbyID, getProjects }

