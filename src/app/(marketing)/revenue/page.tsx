export default function Revenue({ params, searchParams }: { params: Promise<{ data: any }>; searchParams: Promise<{ data: any }> }) {
  console.log(params, searchParams);

  return <div className="flex h-screen w-screen items-center justify-center text-2xl">Revenue</div>;
}
