'use client';

import React from 'react';
import { Zoom } from 'react-awesome-reveal';
// react component for image with animation zoom in
const ZoomImage = ({
  children,
  ...props
}: React.PropsWithChildren<{}>): JSX.Element => {
  // const inViewRef = useRef(null);
  // const isInView = useInView(inViewRef, { once: true }); // `once: true` ensures the animation only runs once

  return (
    // <motion.div
    //   ref={inViewRef}
    //   initial={{ scale: 0 }}
    //   animate={{ scale: isInView ? 1 : 0 }}
    //   transition={{ duration: 0.5 }}
    //   {...props}
    // >
    //   {children}
    // </motion.div>

    <Zoom {...props} triggerOnce>
      {children}
    </Zoom>
  );
};

export default ZoomImage;
