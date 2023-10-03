import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MetropolitanMuseum = () => {
  let [artObjects, setArtObjects] = useState([]);
  let [artImgs, setArtImgs] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=True&isPublicDomain=True&medium=Paintings&q=Landscape';
//hasImages=True isPublicDomain=True &medium=Paintings
    axios.get(apiUrl)
    .then((response) => {
      setArtObjects(response.data.objectIDs);
      console.log("IDs")
      console.log(artObjects);

    });
  }, []);

  useEffect(() => {
            artImgs = []
            for (let i = 0; i < 25; i++) { 
            let id = artObjects[i]; 
            axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
            .then((response) => {
                /*if (!response.ok) {
                    i++
                } */
                artImgs.push(response.data);
            })  
        }

        console.log('URLs')
        console.log(artImgs)

    /*    here I was trying to filter out the items that do not have images to get a more clean array
    const pubicDomainObjs = artImgs.filter(function(ele) {

            return ele.isPublicDomain === true
        
    }
    )
    console.log("Fixed Array")
    console.log(pubicDomainObjs)
   
    */
     

    }
     

    
 //urls are stored in artImgs 
    
  );

  };

export default MetropolitanMuseum;
