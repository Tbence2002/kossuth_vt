import React, { useState, useEffect } from 'react'
import "./Home.css"
import { storage } from './Firebase'
import { ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'
import { v4 } from 'uuid'
import toast, { Toaster } from 'react-hot-toast';
import {motion} from 'framer-motion'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'

function MyGallery() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    const imageListRef = ref(storage, "images/");
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snaphsot) => {
            getDownloadURL(snaphsot.ref).then((url) => {
                setImageList((prev) => [...prev, url]);
                toast.success('Sikeres képfeltöltés!');
            })
        });
    };

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
            <div className='gallery-content'>
                <h2>Feltölthet új képeket a galériába</h2>
                <div className='add-image'>
                    <input type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                    <button onClick={uploadImage}>Feltöltés</button>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
                <div className='arrow-down'>
                    <i>↓</i>
                    <p>Képek megtekintése</p>
                </div>
            </div>
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