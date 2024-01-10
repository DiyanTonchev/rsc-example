import { db } from '~/server/db';
import { posts } from '~/server/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

import CreatePost from './_components/create-post';

export default async function PostsPage() {
  const posts = await db.query.posts.findMany();

  return (
    <>
      <div className='flex flex-col text-xl'>
        {posts.map((post) => (
          <PostView post={post} key={post.id} />
        ))}
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Create a new post</h1>
        <CreatePost />
      </div>
    </>
  );
}

type PostType = {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date | null
}

function PostView({ post }: { post: PostType }) {
  async function deletePostAction() {
    'use server';

    await db.delete(posts).where(eq(posts.id, post.id)); // Delete post from DB
    revalidatePath('/posts'); // Revalidate page to see changed content
  }

  return (
    <div className='flex justify-between items-center p-4 hover:bg-gray-800/80 rounded-md min-w-96 transition-colors'>
      {post.name}

      {/* Note: For actions to work, they have to be IN a form. The action itself can be bound at either via form action={thing} OR button formAction={thing} */}
      <form>
        <button
          formAction={deletePostAction}
          className='border p-2 ml-4 font-bold text-red-300 rounded-md hover:text-red-400 transition-colors'
        >
          Delete
        </button>
      </form>
    </div>
  );
};
