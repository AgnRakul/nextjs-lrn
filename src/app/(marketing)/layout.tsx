import '../globals.css';

export const metadata = {
  title: 'Marketing',
  description: 'Marketing Page',
};

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <header className="h-10 w-screen bg-slate-400">Header</header>
        {children}
        <footer className="h-10 w-screen bg-slate-400">Footer</footer>
      </body>
    </html>
  );
}
