import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

import logoImg from '@/public/assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="footer  bg-white mt-auto py-2">
      <Container className="content" fluid="md">
        <Row>
          <Col xs={6}>
            <Image className="footer-logo" src={logoImg} alt="Acecv Logo" />
          </Col>
          <Col xs={6} className="text-end sm-text-left">
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
