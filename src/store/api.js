import axios from 'axios'

export default()=>{
    return axios.create({
        baseURL: 'http://cms.sman1jonggol.sch.id',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}