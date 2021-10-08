import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:5000/herois'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    setDado(resposta.data)
}

//export const busca2 = url => {
//    new Promise((resolve, reject) => {
//        api.get(url)
//        .then(res =>{ 
//            return resolve(res.data)
//        })
//        .catch(err =>{ 
//            return reject(err)
//        })
//    })    
//}