import React from 'react'

export const generateStaticParams = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
   const posts = await res.json()
   return posts.filter((post, i) => i <= 10).map((post) => ({ postId: String(post.id) }))
   // [ {postId: '1'}, {postId: '2'} ]
}


export default async function Page({ params }) {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
   const post = await res.json()

   return (
      <div>
         <h1>{post.title}</h1>
         <p>
            {post.body}
         </p>
      </div>
   )
}
