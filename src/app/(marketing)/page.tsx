import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-2xl">
      <p>Home Page</p>
      <Link href={'/revenue?data=en'}>Revenue</Link>
    </div>
  );
}
