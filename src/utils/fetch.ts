const API_KEY ='CWwEkclJqSAUyxoKN9ZCOj282uFoIhb4QGSSvJhm'
const API_URL ='https://api.nasa.gov/planetary/apod'

export default async (urlParams?:string)=>{
  
  try {

    const response = await fetch(`${API_URL}?api_key=${API_KEY}${typeof urlParams!=='undefined' && urlParams?.length>0? urlParams:''}`
    )
    const data = await response.json()
    return Promise.resolve(data)
  } catch (error) {
    console.log('Error: ',error);
    Promise.reject(error)
    
  }
}


