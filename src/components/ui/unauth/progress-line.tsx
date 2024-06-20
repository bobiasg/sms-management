'use client';

import type { ProgressProps } from 'rc-progress';
import { Line as ClientLine } from 'rc-progress';
import { useEffect, useState } from 'react';

export default function Line({ percent, ...props }: ProgressProps) {
  const [animatePercent, setPercent] = useState<number | number[] | undefined>(
    0,
  );
  useEffect(() => {
    setPercent(percent);
  }, [percent]);

  return <ClientLine percent={animatePercent} {...props} />;
}
