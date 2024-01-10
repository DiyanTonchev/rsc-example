'use client';

import { type ReactElement } from 'react';

export default function SomeClientComponent({
  someServerComponent,
  // children,
}: {
  someServerComponent: ReactElement,
  // children?: ReactElement
}) {

  return (
    <div className="flex flex-col p-6 border-2 rounded-md">
      <h3 className='mb-4'>Hello from a client component</h3>
      {someServerComponent}
      {/* {children} */}
    </div>
  );
}