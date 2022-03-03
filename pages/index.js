import Head from "next/head";

import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

export async function getStaticProps() {
  const files = fs.readdirSync('content');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`content/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-neutral-800">
       <Head>
         <title>Johan Eriksson - jeksn.me</title>
         <link rel="icon" href="/favicon.ico" />
       </Head>

       <main className="relative flex flex-col justify-center w-full md:flex-row">
         <div className="relative top-0 flex flex-col w-full min-h-screen text-white bg-neutral-900 md:w-1/2">
          <div className="container fixed bottom-0 flex flex-col justify-end h-full p-16">
            <h1 className="text-3xl font-bold">jeksn / Johan Eriksson</h1>
            <span className="mt-4 text-lg">developer | WTMG Create</span>
            <Link href="mailto:johan@jeksn.me">
              <a className="mt-4 text-2xl hover:underline">johan@jeksn.me</a>
            </Link>
          </div>
         </div>
          <div className="relative w-full h-full text-black bg-gray-50 md:w-1/2">
          <div className="container flex flex-col justify-end h-full p-16">
            <h2 className="text-lg font-semibold">Blog posts</h2>
            {posts.map(({ slug, frontmatter }) => (
              <div
                key={slug}
                className='text-black'
              >
                <Link href={`/blog/${slug}`}>
                  <a>
                    <p className='pt-4 mb-0 text-lg underline'>{frontmatter.title}</p>
                  </a>
                </Link>
                <span className='text-base'>{frontmatter.date}</span>
              </div>
            ))}
          </div>
          </div>
        </main>
    </div>
  );
}