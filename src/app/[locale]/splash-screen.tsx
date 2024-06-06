import Image from 'next/image';

import { toAbsoluteUrl } from '@/libs/AssetHelpers';

function SplashScreen() {
  return (
    <div id="splash-screen" className="splash-screen">
      <Image
        src={toAbsoluteUrl('/media/logos/keenthemes-dark.svg')}
        className="dark-logo"
        alt="Keenthemes dark logo"
      />
      <Image
        src={toAbsoluteUrl('/media/logos/keenthemes.svg')}
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

export default SplashScreen;
