import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktopWeird: {
    breakpoint: { max: 3000, min: 2250 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 2250, min: 1500 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1500, min: 1020 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 1020, min: 0 },
    items: 1
  }
};

interface Props {
  children: any
}

const RoundAbout = (props: Props) => {

  return (
      <Carousel responsive={responsive}>
        { props.children }
      </Carousel>
  );
}

export default RoundAbout;