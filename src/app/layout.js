import './globals.css';
import { Almarai } from 'next/font/google';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800']
});

export const metadata = {
  title: 'ًEasylab',
  description: 'شركة إيزي لاب تعمل في مجال تقنية المعلومات وتقديم خدمات تصميم المواقع',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={almarai.className}>{children}</body>
    </html>
  );
}
