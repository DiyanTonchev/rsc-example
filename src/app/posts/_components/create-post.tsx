'use client';

import { createPostAction } from '../actions';

import { useFormState } from 'react-dom';
import { useRef, type ElementRef, useEffect } from 'react';
import toast from 'react-hot-toast';

import SubmitButton from './submit-button';

const initialState = {
  success: true,
  message: ''
};

export default function CreatePost() {
  const [state, formAction] = useFormState(createPostAction, initialState);

  const inputRef = useRef<ElementRef<'input'>>(null);
  useEffect(() => {
    if (!state.success) {
      toast(state.message)
    }
  }, [state]);

  return (
    <form action={(formData: FormData) => {
      formAction(formData);
      inputRef.current && (inputRef.current.value = '');
    }}>
      <input
        ref={inputRef}
        type='text'
        autoComplete="off"
        name='post-name'
        className='p-4 text-xl text-black rounded'
        required
      />
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>
  );
}
