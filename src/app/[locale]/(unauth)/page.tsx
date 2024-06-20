/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Line from '@/components/ui/unauth/progress-line';
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
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-md-6 sm-margin-b-60">
              <div className="margin-b-30">
                <h1 className="promo-block-title">
                  Alisa <br /> Portman
                </h1>
                <p className="promo-block-text">Web &amp; UI/UX Designer</p>
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
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>

                    {/* <i className="fa-brands fa-linkedin" /> */}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <div className="promo-block-img-wrap">
                <Image
                  className="promo-block-img img-responsive"
                  src={avatarImg}
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
          {/* <!--// end row --> */}
        </div>
      </div>
      <div id="about">
        <div className="container-lg content-lg">
          <div className="row">
            <div className="col-12 col-md-5 sm-margin-b-60">
              {/* <img
                className="full-width img-responsive"
                src="img/500x700/01.jpg"
                alt="About me"
              /> */}
            </div>
            <div className="col-12 col-md-7">
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

                  {/* <div
                    className="progress-bar bg-color-base"
                    role="progressbar"
                    data-width="87"
                  /> */}
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
            </div>
          </div>
        </div>
      </div>

      <div id="work">
        <div className="bg-color-sky-light">
          <div className="container-lg content-lg">
            <div className="row margin-b-40">
              <div className="col-12 col-lg-6">
                <h2>Latest Products</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incididunt ut laboret dolore magna aliqua enim minim
                  veniam exercitation
                </p>
              </div>
            </div>
            {/* <!--// end row --> */}

            <div className="row">
              {/* <!-- Latest Products --> */}
              <div className="col-12 col-md-4 sm-margin-b-50">
                <div className="margin-b-20">
                  <div
                    className="wow zoomIn"
                    data-wow-duration=".3"
                    data-wow-delay=".1s"
                  >
                    {/* <img
                      className="img-responsive"
                      src="img/970x647/01.jpg"
                      alt="Latest Products  1"
                    /> */}
                  </div>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Triangle Roof
                  </a>{' '}
                  <span className="text-uppercase margin-l-20">Management</span>
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
              </div>
              {/* <!-- End Latest Products --> */}

              {/* <!-- Latest Products --> */}
              <div className="col-12 col-md-4 sm-margin-b-50">
                <div className="margin-b-20">
                  <div
                    className="wow zoomIn"
                    data-wow-duration=".3"
                    data-wow-delay=".1s"
                  >
                    {/* <img
                      className="img-responsive"
                      src="img/970x647/02.jpg"
                      alt="Latest Products 2"
                    /> */}
                  </div>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Curved Corners
                  </a>{' '}
                  <span className="text-uppercase margin-l-20">
                    Developmeny
                  </span>
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
              </div>
              {/* <!-- End Latest Products --> */}

              {/* <!-- Latest Products --> */}
              <div className="col-12  col-md-4 sm-margin-b-50">
                <div className="margin-b-20">
                  <div
                    className="wow zoomIn"
                    data-wow-duration=".3"
                    data-wow-delay=".1s"
                  >
                    {/* <img
                      className="img-responsive"
                      src="img/970x647/03.jpg"
                      alt="Latest Products 3"
                    /> */}
                  </div>
                </div>
                <h4>
                  <a href="https://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes">
                    Bird On Green
                  </a>{' '}
                  <span className="text-uppercase margin-l-20">Design</span>
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
              </div>
              {/* <!-- End Latest Products --> */}
            </div>
            {/* <!--// end row --> */}
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="">
          <div className="container-lg content-lg">
            <div className="row margin-b-40">
              <div className="col-12 col-lg-6">
                <h2>Contact Me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                  tempor incididunt ut laboret dolore magna aliqua enim minim
                  veniam exercitation
                </p>
              </div>
            </div>
            {/* <!--// end row --> */}

            <div className="row">
              <div className="col-6 col-lg-3 md-margin-b-30">
                <h4>Location</h4>
                <a href="http://keenthemes.com/">Brookyln, New York</a>
              </div>
              <div className="col-6  col-lg-3 md-margin-b-30">
                <h4>Phone</h4>
                <a href="http://keenthemes.com/">+77 234 548 00 00</a>
              </div>
              <div className="col-6  col-lg-3 ">
                <h4>Email</h4>
                <a href="mailto:#">alex.teseira@gmail.com</a>
              </div>
              <div className="col-6 col-lg-3 ">
                <h4>Web</h4>
                <a href="http://keenthemes.com/">alex.teseira.com</a>
              </div>
            </div>
            {/* <!--// end row --> */}
          </div>
        </div>
      </div>
    </>
  );
}
