import React from 'react'
import Head from "next/head";

import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
function PostTemplate({ content, data }) {
   // This holds the data between `---` from the .md file
   const frontmatter = data
 
   return (
     <>
      <Head>
         <title>{frontmatter.title} - jeksn.me</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>
     <Link href="/">
      <a className="absolute top-10 left-10 text-neutral-900">go back</a>
     </Link>
     <div className="container flex flex-col justify-center h-full max-w-screen-md mx-auto my-32 prose">
       <h1 className="mb-0">{frontmatter.title}</h1>
       <h3 className="mt-2 mb-16 text-base font-normal text-neutral-600">{frontmatter.publishedDate}</h3>
       <ReactMarkdown children={content} />
     </div>
     </>
   )
 }

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../content/${slug}.md`)
  
  // Parse .md data through `matter`
  const data = matter(content.default)
  
  // Pass data to our component props
  return { ...data }

  return { slug }
}

export default PostTemplate