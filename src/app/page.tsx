'use client';
import Image from 'next/image';

import { useThemeDetector } from '@uireact/tools';

import logo from '../../public/logo.png';
import logoDark from '../../public/logo-dark.png';

import styles from './page.module.scss';

export default function Home() {
  const theme = useThemeDetector();

  return (
    <main className={styles.main}>
      <Image src={theme === 'dark' ? logoDark : logo} alt='Logo' />
    </main>
  );
}
