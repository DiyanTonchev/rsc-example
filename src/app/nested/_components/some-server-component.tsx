import fs from  'fs';

export default async function SomeServerComponent() {
  const text = fs.readFileSync('text.txt', 'utf-8');

  return <div className='border-2 rounded-md p-4'>{text}</div>
}; 