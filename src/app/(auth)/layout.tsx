import '../globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <header className="h-10 w-screen bg-slate-400">Header</header>
        {children}
      </body>
    </html>
  );
}
