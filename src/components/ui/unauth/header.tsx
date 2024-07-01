'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
      <Navbar bg="white" expand="lg" fixed="top">
        <Container fluid="md">
          <Navbar.Brand href="#body">
            <Image src={logoImg} alt="Asentus Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <ScrollableLink
                  activeClass="active"
                  to="promo"
                  href=""
                  spy
                  smooth
                  offset={0}
                  duration={500}
                  className="nav-link nav-item-child nav-item-hover"
                >
                  Home
                </ScrollableLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollableLink
                  activeClass="active"
                  to="about"
                  href="#about"
                  spy
                  smooth
                  offset={-50}
                  duration={500}
                  className="nav-link nav-item-child nav-item-hover"
                >
                  About
                </ScrollableLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollableLink
                  activeClass="active"
                  to="work"
                  href="#work"
                  spy
                  smooth
                  offset={-50}
                  duration={500}
                  className="nav-link nav-item-child nav-item-hover"
                >
                  Work
                </ScrollableLink>
              </Nav.Item>
              <Nav.Item>
                <ScrollableLink
                  activeClass="active"
                  to="contact"
                  href="#contact"
                  spy
                  smooth
                  offset={-50}
                  duration={500}
                  className="nav-link nav-item-child nav-item-hover"
                >
                  Contact
                </ScrollableLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
