import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBContainer
} from 'mdb-react-ui-kit';
import './Styles/Gallery.css';

import gallery1 from './Styles/images/gallary1.jpeg';
import gallery2 from './Styles/images/gallary2.jpeg';
import gallery3 from './Styles/images/gallary3.jpeg';
import gallery4 from './Styles/images/gallary4.jpeg';
import gallery5 from './Styles/images/gallary5.jpeg';
import gallery6 from './Styles/images/gallary6.jpeg';
import gallery7 from './Styles/images/gallary7.jpeg';
import gallery8 from './Styles/images/gallary8.jpeg';
import gallery9 from './Styles/images/gallary9.jpeg';
import gallery10 from './Styles/images/gallary10.jpeg';

const images = [
  { src: gallery1, caption: 'First slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
  { src: gallery2, caption: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: gallery3, caption: 'Third slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
  { src: gallery4, caption: 'Fourth slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
  { src: gallery5, caption: 'Fifth slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: gallery6, caption: 'Sixth slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
  { src: gallery7, caption: 'Seventh slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' },
  { src: gallery8, caption: 'Eighth slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { src: gallery9, caption: 'Ninth slide label', description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
  { src: gallery10, caption: 'Tenth slide label', description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.' }
];

const Gallery = () => {
  return (
    <MDBContainer className="gallery-container">
      <h1 className="text-center mb-5">Gallery Page</h1>
      <MDBCarousel showIndicators showControls fade>
        {images.map((image, index) => (
          <MDBCarouselItem key={index} active={index <= 2}>
            <img src={image.src} className="d-block w-100" alt={`Gallery ${index + 1}`} />
            <MDBCarouselCaption>
              <h5 className="h5-responsive">{image.caption}</h5>
              <p>{image.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        ))}
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Gallery;

