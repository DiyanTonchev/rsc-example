'use server';

import { db } from '~/server/db';
import { posts } from '~/server/db/schema';
import { revalidatePath } from 'next/cache'
import { z } from 'zod';

export async function createPostAction(prevState: { message: string, success: boolean }, formData: FormData) {
  const postNameSchema = z.string().min(1).max(256, 'The post is toooo long');

  const postName = formData.get('post-name'); // Get post name from formData

  try {
    const validatedName = postNameSchema.parse(postName);

    await db.insert(posts).values({ name: validatedName }); // Insert into DB

    revalidatePath('/posts'); // Revalidate page to see new content
    return { success: true, message: 'Successfully added a new post' };
  } catch (err) {
    return { success: false, message: 'Failed to add post' };
  }
}