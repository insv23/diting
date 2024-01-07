'use client';

import { useState } from 'react';

type Props = {
  timeout?: number;
};

export default function useCopyToClipboard({ timeout = 2000 }: Props) {
  const [isCopied, setIsCopied] = useState<Boolean>(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === 'undefined' || !navigator.clipboard?.writeText) {
      return;
    }

    if (!value) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };

  return { isCopied, copyToClipboard };
}
