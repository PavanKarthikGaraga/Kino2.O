'use client';

import Image from 'next/image';
import { galleryImages } from '../../Data/gallery';
import './gallery.css';

const Gallery = () => {
  return (
    <section className="gallery-container" id="gallery">
      <div className="gallery-container-in">
        <div className="gallery-container-in-one">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-container-in-two">
          <div className="gallery-container-in-two-in">
            {galleryImages.map((image, index) => (
              <div key={index} className="gallery-item">
                <Image 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="gallery-image" 
                  width={800}
                  height={600}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
