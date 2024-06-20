import Image from 'next/image';

import logoImg from '@/public/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer  bg-white mt-auto py-2">
      <div className="content container-lg">
        <div className="row">
          <div className="col-6">
            <Image className="footer-logo" src={logoImg} alt="Acecv Logo" />
          </div>
          <div className="col-6 text-end sm-text-left">
            <p className="mb-0">
              <a
                className="fw-bold"
                href="http://keenthemes.com/preview/acecv/"
              >
                Acecv
              </a>{' '}
              Theme Powered by:{' '}
              <a className="fw-bold" href="http://www.keenthemes.com/">
                KeenThemes.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
