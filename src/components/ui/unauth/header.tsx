'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { scrollSpy } from 'react-scroll';

import { ScrollableLink } from '@/components/ui/unauth/link';
import logoImg from '@/public/assets/images/logo.png';

function Header() {
  const navbarRef = useRef<HTMLElement | null>(null);

  // const [isBottom, setIsBottom] = useState<boolean>(false);

  useLayoutEffect(() => {
    const handleScroll = (_: number, y: number) => {
      if (y > 60) {
        navbarRef.current?.classList.add('page-on-scroll');
      } else {
        navbarRef.current?.classList.remove('page-on-scroll');
      }
    };

    scrollSpy.addSpyHandler(handleScroll, document);
    // Updating scrollSpy when the component mounts.
    // scrollSpy.update();

    return () => {
      scrollSpy.unmount(undefined, handleScroll);
    };
  }, []);

  return (
    <header className="header fixed-top" ref={navbarRef}>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg" role="navigation">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="menu-container js_nav-item">
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="logo">
              <a className="logo-wrap" href="#body">
                <Image className="logo-img" src={logoImg} alt="Asentus Logo" />
              </a>
            </div>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="menu-container">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item js_nav-item ">
                  <ScrollableLink
                    activeClass="active"
                    to="promo"
                    spy
                    smooth
                    offset={0}
                    duration={500}
                    className="nav-link nav-item-child nav-item-hover"
                  >
                    Home
                  </ScrollableLink>
                </li>
                <li className="nav-item js_nav-item">
                  <ScrollableLink
                    activeClass="active"
                    to="about"
                    spy
                    smooth
                    offset={-50}
                    duration={500}
                    className="nav-link nav-item-child nav-item-hover"
                  >
                    About
                  </ScrollableLink>
                </li>
                {/* <li className="nav-item js_nav-item">
                  <a
                    className="nav-link nav-item-child nav-item-hover"
                    href="#experience"
                  >
                    Experience
                  </a>
                </li> */}
                <li className="nav-item js_nav-item">
                  <ScrollableLink
                    activeClass="active"
                    to="work"
                    spy
                    smooth
                    offset={-50}
                    duration={500}
                    className="nav-link nav-item-child nav-item-hover"
                  >
                    Work
                  </ScrollableLink>
                </li>
                <li className="nav-item js_nav-item">
                  <ScrollableLink
                    activeClass="active"
                    to="contact"
                    spy
                    smooth
                    offset={-50}
                    duration={500}
                    className="nav-link nav-item-child nav-item-hover"
                  >
                    Contact
                  </ScrollableLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End Navbar Collapse --> */}
        </div>
      </nav>
      {/* <!-- Navbar --> */}
    </header>
  );
}

export default Header;
