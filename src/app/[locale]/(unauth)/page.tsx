/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Col, Container, Row } from 'react-bootstrap';

import ZoomImage from '@/components/ui/unauth/animate-image';
import Line from '@/components/ui/unauth/progress-line';
import aboutMeImg from '@/public/assets/images/500x700/01.jpg';
import productOne from '@/public/assets/images/970x647/01.jpg';
import productTwo from '@/public/assets/images/970x647/02.jpg';
import productThree from '@/public/assets/images/970x647/03.jpg';
import avatarImg from '@/public/assets/images/mockup/avatar-01.png';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index() {
  return (
    <>
      <div className="promo-block" id="promo">
        <Container className="container-md">
          <Row>
            <Col md={6} className="sm-margin-b-60">
              <div className="margin-b-30">
                <h1 className="promo-block-title">
                  Khuong <br /> Nguyen
                </h1>
                <p className="promo-block-text">Senior Software Enginneer </p>
              </div>
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.behance.net/keenthemes"
                    className="social-icons"
                    aria-label="Keenthemes on Linkedin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      {/* SVG path remains the same */}
                    </svg>
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <div className="promo-block-img-wrap">
                {/* If using next/image, keep as is. If not, replace with React Bootstrap's Image component */}
                <Image
                  className="promo-block-img img-responsive"
                  src={avatarImg}
                  alt="Avatar"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="about">
        <Container className="content-lg">
          <Row>
            <Col xs={12} md={5} className="sm-margin-b-60">
              <Image
                className="full-width img-responsive"
                src={aboutMeImg}
                alt="About me"
              />
            </Col>
            <Col xs={12} md={7}>
              <div className="section-seperator margin-b-50">
                <div className="margin-b-50">
                  <div className="margin-b-30">
                    <h2>About Me</h2>
                    <p>
                      I&apos;m Alisa Portman, orem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <a
                    href="http://keenthemes.com/"
                    className="btn-theme btn-theme-md btn-default-bg text-uppercase"
                  >
                    Download my CV
                  </a>
                </div>
              </div>

              <h2>My Skills</h2>
              <div className="progress-box">
                <h5>
                  Adobe Illustrator{' '}
                  <span className="color-heading float-end">87%</span>
                </h5>
                <div className="progress-bar">
                  <Line
                    percent={87}
                    strokeWidth={0.5}
                    strokeColor="#17bed2"
                    trailColor="#f5f5f5"
                    trailWidth={0.5}
                  />
                </div>
              </div>
              <div className="progress-box">
                <h5>
                  Adobe Photoshop{' '}
                  <span className="color-heading float-end">96%</span>
                </h5>
                <div className="progress-bar">
                  <Line
                    percent={96}
                    strokeWidth={0.5}
                    strokeColor="#17bed2"
                    trailColor="#f5f5f5"
                    trailWidth={0.5}
                  />
                </div>
              </div>
              <div className="progress-box">
                <h5>
                  Graphic Design{' '}
                  <span className="color-heading float-end">77%</span>
                </h5>
                <div className="progress-bar">
                  <Line
                    percent={77}
                    strokeWidth={0.5}
                    strokeColor="#17bed2"
                    trailColor="#f5f5f5"
                    trailWidth={0.5}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="work">
        <div className="bg-color-sky-light">
          <Container className="content-lg">
            <Row className="row margin-b-40">
              <Col xs={12} lg={6}>
                <h2>Latest Products</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incididunt ut laboret dolore magna aliqua enim minim
                  veniam exercitation
                </p>
              </Col>
            </Row>
            {/* <!--// end row --> */}

            <Row>
              {/* <!-- Latest Products --> */}
              <Col xs={12} md={4} className="mb-5">
                <div className="mb-2">
                  <ZoomImage>
                    <Image
                      className="img-fluid"
                      src={productOne}
                      alt="Latest Products 1"
                    />
                  </ZoomImage>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Triangle Roof
                  </a>{' '}
                  <span className="text-uppercase ms-2">Management</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incdidunt ut laboret dolor magna ut consequat siad
                  esqudiat dolor
                </p>
                <a
                  className="link"
                  href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
                >
                  Read More
                </a>
              </Col>
              {/* <!-- End Latest Products --> */}

              {/* <!-- Latest Products --> */}
              <Col xs={12} md={4} className="mb-5">
                <div className="mb-2">
                  <ZoomImage>
                    <Image
                      className="img-fluid"
                      src={productTwo}
                      alt="Latest Products 2"
                    />
                  </ZoomImage>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Curved Corners
                  </a>{' '}
                  <span className="text-uppercase ms-2">Development</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incdidunt ut laboret dolor magna ut consequat siad
                  esqudiat dolor
                </p>
                <a
                  className="link"
                  href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
                >
                  Read More
                </a>
              </Col>
              {/* <!-- End Latest Products --> */}

              {/* <!-- Latest Products --> */}
              <Col xs={12} md={4} className="mb-5">
                <div className="mb-2">
                  <ZoomImage>
                    <Image
                      className="img-fluid"
                      src={productThree}
                      alt="Latest Products 3"
                    />
                  </ZoomImage>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Bird On Green
                  </a>{' '}
                  <span className="text-uppercase ms-2">Design</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incdidunt ut laboret dolor magna ut consequat siad
                  esqudiat dolor
                </p>
                <a
                  className="link"
                  href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes"
                >
                  Read More
                </a>
              </Col>
              {/* <!-- End Latest Products --> */}
            </Row>
            {/* <!--// end row --> */}
          </Container>
        </div>
      </div>
      <div id="contact">
        <div className="">
          <Container className=" content-lg">
            <Row className="margin-b-40">
              <Col xs={12} lg={6}>
                <h2>Contact Me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incididunt ut laboret dolore magna aliqua enim minim
                  veniam exercitation
                </p>
              </Col>
            </Row>
            {/* <!--// end row --> */}

            <Row>
              <Col xs={6} lg={3} className="md-margin-b-30">
                <h4>Location</h4>
                <a href="http://keenthemes.com/">Brookyln, New York</a>
              </Col>
              <Col xs={6} lg={3} className="md-margin-b-30">
                <h4>Phone</h4>
                <a href="http://keenthemes.com/">+77 234 548 00 00</a>
              </Col>
              <Col xs={6} lg={3}>
                <h4>Email</h4>
                <a href="mailto:#">alex.teseira@gmail.com</a>
              </Col>
              <Col xs={6} lg={3}>
                <h4>Web</h4>
                <a href="http://keenthemes.com/">alex.teseira.com</a>
              </Col>
            </Row>
            {/* <!--// end row --> */}
          </Container>
        </div>
      </div>
    </>
  );
}
