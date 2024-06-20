import './loading.css'; // Global styles for the loading screen

import Image from 'next/image';

import keenthemesLight from '@/public/media/logos/keenthemes.svg';
import keenthemesDark from '@/public/media/logos/keenthemes-dark.svg';

function LayoutSplashScreen() {
  return (
    <div id="splash-screen" className="splash-screen">
      <Image
        src={keenthemesDark}
        className="dark-logo"
        alt="Keenthemes dark logo"
      />
      <Image
        src={keenthemesLight}
        className="light-logo"
        alt="Keenthemes light logo"
      />
      <div className="loader-wrapper">
        <span className="loader" />
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
}

export default LayoutSplashScreen;
