const axios = require('axios')

const baseURL = 'https://como-fazer-cbd16.firebaseio.com/'

const auth = '4tkerUQ385SlXDjn39dOL3hr1NpWo7TksWh3P8t5'

const create = async (key, data) => {
    await axios.post(`${baseURL}/${key}.json?auth=`+auth, data)
}

const list = async key => {
    const content = await axios.get(baseURL+key+'.json?auth='+auth) 
    if (content.data){
        const objetos = Object
                                                .keys(content.data)
                                                .map(value => {
                                                    return {
                                                        id: value,
                                                        ...content.data[value]
                                                    }
                                                })
        return objetos
    }
    return []
}

const apagar = async (key,id) => {
    await axios.delete(baseURL+key+'/'+id+'.json?auth='+auth)  
}

const get = async (key, id) => { 
    const content = await axios.get(`${baseURL}/${key}/${id}.json?auth=`+auth)
    return {
        id,
        ...content.data
    }
}

const update = async (key, id, data) => {
    await axios.put(`${baseURL}/${key}/${id}.json?auth=`+auth, data)
    return true
}
module.exports = {
    create,
    list,
    apagar,
    get,
    update
}