import React, { useState, useEffect } from 'react'
import { storage } from '../components/gallery-components/Firebase'
import { ref, listAll, getDownloadURL} from 'firebase/storage'
import "../components/gallery-components/Gallery.css"
import { motion } from 'framer-motion'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

function MyGallery() {
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      const promises = response.items.map((item) => {
        return getDownloadURL(item);
      });
      Promise.all(promises).then((urls) => {
        setImageList(urls);
      });
    });
  }, [imageList]);

  return (
    <motion.div className='gallery-container'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}>
      <h1>Galéria</h1>
      <div className='image-container'>
        {imageList.map((url) => {
          return <div className='image'>
            <Gallery>
              <Item
                original={url}
                thumbnail={url}
                width="1024"
                height="768">
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={url} alt="kép"/>
                )}
              </Item>
            </Gallery>
          </div>;
        })}
      </div>
    </motion.div>
  )
}

export default MyGallery