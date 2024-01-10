import { createPostAction } from '../actions';

export default function CreatePost() {
  return (
    <form action={createPostAction}>
      <input
        type='text'
        autoComplete='off'
        name='post-name'
        className='p-4 text-xl text-black rounded'
        required
      />
      <button
        type='submit'
        className='ml-4 rounded-xl border bg-white p-4 text-black'
        >
        Submit
      </button>
    </form>
  );
}









// import { useFormState } from 'react-dom';
// import { useRef, type ElementRef, useEffect } from 'react';
// import toast from 'react-hot-toast';

// import SubmitButton from './submit-button';

// const initialState = {
//   success: true,
//   message: ''
// };

// export default function CreatePost() {
//   const [state, formAction] = useFormState(createPostAction, initialState);

//   const inputRef = useRef<ElementRef<'input'>>(null);

//   useEffect(() => {
//     if (!state.success) {
//       toast(state.message)
//     }
//   }, [state]);
  
//   return (
//     <form action={formAction}>
//       <input
//         ref={inputRef}
//         type='text'
//         autoComplete="off"
//         name='post-name'
//         className='p-4 text-xl text-black rounded'
//         required
//       />
//       <SubmitButton />
//       <p aria-live="polite" className="sr-only">
//         {state?.message}
//       </p>
//     </form>
//   );
// }