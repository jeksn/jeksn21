import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
function PostTemplate({ content, data }) {
   // This holds the data between `---` from the .md file
   const frontmatter = data
 
   return (
     <>
     <Link href="/">
      <a className="absolute top-10 left-10 text-neutral-900">go back</a>
     </Link>
     <div className="container flex flex-col justify-center h-full max-w-screen-md mx-auto mt-32 prose">
       <h1>{frontmatter.title}</h1>
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