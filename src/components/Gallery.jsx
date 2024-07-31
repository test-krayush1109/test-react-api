import React, { useEffect, useState } from 'react'
import axios from "../utils/axios";    // Using Axios Instance:

const Gallery = () => {
    const [allPics, setALlPics] = useState([]);

    const getImages = async() => {
        const response = await axios.get('/products?limit=5')
        console.log(response.data);
        setALlPics(response.data);
    }

    useEffect(() => {
        getImages()
    }, [])
    
    const handleClick = (e) => {
        getImages();
        console.log("Btn click");
    }

  return (
      <>
        <button onClick={handleClick} className='px-3 py-1 bg-blue-500 cursor-pointer text-white font-extrabold'>Fetch Images</button>

          <div className="card-container container flex space-x-12 p-5">
              {allPics.map((pic) => {
                  console.log(pic.url);
                  return (
                      <div className='border-slate-200 border-2 p-5 shadow-md hover:shadow-lg hover:-translate-y-2 duration-200 cursor-pointer'>
                      <img key={pic.id} src={pic.image} alt="" height="200px" width="200px" />                      
                      </div>
                  )
              })  }
          </div>
      </>
  )
}

export default Gallery