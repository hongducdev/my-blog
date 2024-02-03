"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface FallbackImageProps {
  src: string;
  [rest: string]: any;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ src, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc ? imgSrc : "/images/default-image.jpg"}
      alt=""
      priority
      {...rest}
      onError={() => setImgSrc("/images/default-image.jpg")}
    />
  );
};

export default FallbackImage;
