import Head from "next/head"
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
    <div className="flex flex-col items-center justify-center h-auto my-gradient md:h-screen text-neutral-800">
       <main className="relative flex flex-col justify-center w-full md:flex-row">
         <div className="relative top-0 flex flex-col w-full min-h-[80vh] text-gray-200 md:min-h-screen gradient md:w-1/2 ">
          <div className="container bottom-0 flex flex-col justify-end h-full px-4 pt-16 pb-4 md:px-16 md:fixed">
            <h1 className="text-4xl font-bold lg:text-7xl xl:text-9xl md:text-6xl">jeksn <br></br>/ Johan <br></br>Eriksson</h1>
            <div className="pl-3 my-6 border-l-2 border-white">
            </div>
            <p className="mb-2 text-lg">You can find me here:</p>
            <a href="https://twitter.com/jeksn_" className="text-base w-fit hover:underline" target="_blank">Twitter</a>
            <a href="https://twitter.com/jeksn_" className="mb-2 text-sm italic w-fit" target="_blank">@jeksn_</a>
            <a href="https://www.linkedin.com/in/jeksn/" className="text-base w-fit hover:underline" target="_blank">LinkedIn</a>
            <a href="https://www.linkedin.com/in/jeksn/" className="mb-2 text-sm italic w-fit" target="_blank">@jeksn</a>
            <a href="https://letterboxd.com/jeksn/" className="text-base w-fit hover:underline" target="_blank">Letterboxd</a>
            <a href="https://letterboxd.com/jeksn/" className="mb-2 text-sm italic w-fit" target="_blank">@jeksn</a>
            <a href="https://oku.club/user/jek5n" className="text-base w-fit hover:underline" target="_blank">Oku</a>
            <a href="https://oku.club/user/jek5n" className="mb-2 text-sm italic w-fit" target="_blank">@jek5n</a>
            <a href="mailto:johan@jeksn.me" className="text-base w-fit hover:underline">E-mail me</a>
            <a href="mailto:johan@jeksn.me" className="mb-2 text-sm italic w-fit">johan@jeksn.me</a>
            <span className="pt-8 text-xs text-gray-400">2022. This site is still actively worked on and might look wonky at times.</span>
          </div>
         </div>
          <div className="relative w-full h-full text-neutral-200 md:w-1/2">
          <div className="container flex flex-col justify-end h-full p-4 pt-8 md:p-16">
            <h2 className="mb-4 text-2xl md:text-4xl">Blog posts</h2>
            {posts.sort(
              (a, b) =>
                new Date(b.frontmatter.publishedDate).getTime() - new Date(a.frontmatter.publishedDate).getTime(),
                ).map(({ slug, frontmatter }) => (
                <Link href={`/blog/${slug}`}>
                  <a>
              <div
                key={slug}
                className='px-12 py-6 mt-8 border-l-4 transition-all ease-in-out hover:border-l-8 border-[#364d5f] rounded-sm text-neutral-900 bg-neutral-100'
              >
                <p className='mb-2 text-xl'>{frontmatter.title}</p>
                <span className='text-sm no-underline text-neutral-600'>{frontmatter.publishedDate}</span>
              </div>
              </a>
            </Link>
            ))}
          </div>
          </div>
        </main>
    </div>
  );
}