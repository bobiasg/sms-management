'use client';

import { useLayoutEffect, useRef } from 'react';
import { animateScroll, scrollSpy } from 'react-scroll';

const ScrollTop: React.FC = () => {
  const offset = 300;
  // browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  const offsetOpacity = 1200;
  // duration of the top scrolling animation (in ms)
  const scrollTopDuration = 700;

  const ref = useRef<HTMLButtonElement | null>(null);

  useLayoutEffect(() => {
    const handleScroll = (_: number, y: number) => {
      if (y > offset) {
        ref.current?.classList.add('back-to-top-is-visible');
      } else {
        ref.current?.classList.remove(
          'back-to-top-is-visible',
          'back-to-top-fade-out',
        );
      }
      if (y > offsetOpacity) {
        ref.current?.classList.add('back-to-top-fade-out');
      }
    };

    scrollSpy.addSpyHandler(handleScroll, document);
    // Updating scrollSpy when the component mounts.
    // scrollSpy.update();

    return () => {
      scrollSpy.unmount(undefined, handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: scrollTopDuration,
      smooth: true,
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="js-back-to-top back-to-top"
      ref={ref}
    >
      Top
    </button>
  );
};

export default ScrollTop;
