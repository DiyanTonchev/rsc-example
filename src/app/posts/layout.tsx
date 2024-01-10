import { Toaster } from 'react-hot-toast';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white gap-24 px-4 py-16'>
      <h1 className='text-2xl font-bold'>Posts</h1>
      {children}
      <Toaster position='bottom-center' />
    </main>
  )
}