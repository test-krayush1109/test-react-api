import React, { useEffect, useState } from 'react'
import axios from "../utils/axios";    // Using Axios Instance:

const Gallery = () => {
    const [allPics, setALlPics] = useState([]);

    const getImages = async() => {
        const response = await axios.get('/list?page=1&limit=20')
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

          <div className="card-container flex">
              {allPics.map((pic) => {
                  console.log(pic.url);
                  return (
                      <>
                      <img key={pic.id} src={pic.url} alt="" height="200px" width="200px" />
                      
                      </>
                  )
              })  }
          </div>
      </>
  )
}

export default Gallery