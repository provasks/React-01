import React from 'react';
import LazyLoad from 'react-image-lazy-load';
 
const Test = () => (
  <div>
    Scroll to load images.
    <div className="filler" />
    <LazyLoad height={762} offsetVertical={300} loaderImage originalSrc="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" imageProps={{
      src: require('../images/logo-desk.jpg'),
      alt: "DR_MVMQ20Feb2015ouellet1024.jpg",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad height={683} offsetTop={200} imageProps={{
      src: "http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg",
      alt: "2015_02_20_conj_bourque1024.jpg",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad height={480} offsetHorizontal={50} imageProps={{
      src: "http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif",
      alt: "1502/MarsPlume_jaeschke_480.gif",
      ref: "image",
      className: "className"
    }} />
    <div className="filler" />
    <LazyLoad
      height={720}
      onContentVisible={() => console.log('look ma I have been lazyloaded!')} originalSrc="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" loaderImage={true} imageProps={{
        src: require('../images/logo-desk.jpg'),
        alt: "ToadSky_Lane_1080_annotated.jpg",
        ref: "image",
        className: "image"
      }} />
    <div className="filler" />
  </div>
);

export default Test