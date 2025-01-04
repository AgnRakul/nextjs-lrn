type Props = {
  params: Promise<{ blogId: string }>;
};

export default async function IndividualBloc({ params }: Props) {
  const { blogId } = await params;
  return <div className="flex h-screen w-screen items-center justify-center text-2xl">{`Blog ${blogId}`}</div>;
}
