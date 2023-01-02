import Image from "next/image";
import { useState } from "react";

const MyImage: React.FC<{ src: string; alt: string, height: number, width: number}> = ({ src, alt, height, width }) => {
//   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-2xl xl:aspect-w-7 xl:aspect-h-8">
      <Image
        src={!error ? src : src}
        alt={alt}
        height={height}
        width={width}
        onError={() => setError(true)}
      />
    </div>
  );
};

export { MyImage };
