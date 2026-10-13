import { Lora, Open_Sans } from 'next/font/google';

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600'],
});

export const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['600'],
});

export const fontVariables = `${openSans.variable} ${lora.variable}`;
