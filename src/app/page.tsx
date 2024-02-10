import PostCard from "@/components/PostCard";
import { db } from "@/lib/db";

async function getPosts() {
  const res = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createAt: 'desc'
    }
  })
  return res
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="grid items-center justify-center place-items-start md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}

    </div>
  );
}
