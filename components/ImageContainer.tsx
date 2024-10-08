import React from 'react';
import Image from 'next/image';

function ImageContainer({ src, alt }: {
  src:string,
  alt:string
}) {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  React.useEffect(() => {
    const body = document.querySelector('body');
    if (isVisible) {
      body?.classList.add('overflow-hidden');
    } else {
      body?.classList.remove('overflow-hidden');
    }
  }, [isVisible]);
  return (
    <>
      {
          isVisible && (
            <>
              <div className="absolute top-10 right-10 z-10">
                <button
                  type="button"
                  className="  p-3 border"
                  onClick={() => setIsVisible(false)}
                >
                  close
                </button>
              </div>
              <div className="absolute top-0 left-0 w-screen h-screen bg-black flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  width={window.screen.height / 1.7}
                  height={window.screen.height}
                />
              </div>
            </>
            )
        }
      {
            !isVisible
            && (
            <button type="button" onClick={() => setIsVisible(true)}>
              <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
              />
            </button>
            )
        }
    </>
  );
}

export default ImageContainer;
