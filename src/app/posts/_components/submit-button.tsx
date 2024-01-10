'use client';

import { useFormStatus } from 'react-dom';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  console.log('pending' ,pending);

  return (
    <button
      type='submit'
      aria-disabled={pending}
      disabled={pending}
      className='ml-4 rounded-xl border bg-white p-4 text-black'
    >
      Submit
    </button>)
}