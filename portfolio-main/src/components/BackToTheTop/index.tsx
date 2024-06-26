'use client';

import { useEffect } from 'react';

import { ChevronUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const BackToTheTop = () => {
  const t = useTranslations('Home');

  useEffect(() => {
    const handleScroll = () => {
      try {
        const mybutton = document?.getElementById?.('backToTheTop');

        if (
          document.body.scrollTop > 25 ||
          document.documentElement.scrollTop > 25
        ) {
          // eslint-disable-next-line no-unused-expressions
          mybutton ? (mybutton.style.display = 'block') : null;
        } else {
          // eslint-disable-next-line no-unused-expressions
          mybutton ? (mybutton.style.display = 'none') : null;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        id="backToTheTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('backToTheTop.title')}
        color="primary"
      >
        <ChevronUp />
      </button>

      <noscript>
        <Link href="#" role="button" aria-label={t('backToTheTop.title')}>
          <button
            type="button"
            id="backToTheTopNoJS"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t('backToTheTop.title')}
            color="primary"
          >
            <ChevronUp />
          </button>
        </Link>
      </noscript>
    </>
  );
};
