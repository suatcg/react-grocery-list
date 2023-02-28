import React, { useCallback, useState } from 'react'

const ImageObserver = ({src: ImageSrc, root, rootMargin, threshold,alt, ...props}) => {
  const [src, setSrc] = useState(false);
  const containerRef = userRef(null);

  const calback = useCallback(((entries)) => {
      const [entry] = entries;
      if(entry.isIntersecting) {
        setSrc(ImageSrc);
      }
    },
    [],
  )
  
  
  const callback
  return (
    <div>ImageObserver</div>
  )
}

export default ImageObserver