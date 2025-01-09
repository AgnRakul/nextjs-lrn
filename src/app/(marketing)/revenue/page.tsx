export default async function Revenue({ params, searchParams }: { params: Promise<{ data: any }>; searchParams: Promise<{ data: any }> }) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve('loading');
    }, 5000);
  });
  return <div className="flex h-screen w-screen items-center justify-center text-2xl">Revenue</div>;
}
