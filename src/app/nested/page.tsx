import SomeClientComponent from "./_components/some-client-component";
import SomeServerComponent from "./_components/some-server-component";

export default async function NestedPage() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white gap-24 px-4 py-16'>
      <h1 className='text-2xl font-bold'>Nested Components</h1>
      <SomeClientComponent someServerComponent={<SomeServerComponent />} />
    </main>
  );
}