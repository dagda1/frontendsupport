import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import path from 'path';
import { bundleMDX } from './mdx.server';

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

export async function getPost(slug: string) {
  console.dir({ slug, a: __dirname });
  const source = await fs.readFile(path.join(`${__dirname}/../blog-posts`, `${slug}.mdx`), 'utf-8');
  const { default: remarkGfm } = await import('remark-gfm');
  const { default: rehypeAutolinkHeadings } = await import('rehype-autolink-headings');

  const { default: rehypeToc } = await import('rehype-toc');
  const { default: rehypeSlug } = await import('rehype-slug');

  const post = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // remarkMdxImages,
        remarkGfm,
        // remarkBreaks,
        // [remarkFootnotes, { inlineNotes: true }],
      ];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeAutolinkHeadings, rehypeSlug, rehypeToc];

      return options;
    },
  }).catch((e) => {
    console.error(e);
    throw e;
  });

  return post;
}

export async function getPosts() {
  const postsPath = await fs.readdir(`${__dirname}/../blog-posts`, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {
      const file = await fs.readFile(path.join(`${__dirname}/../blog-posts`, dirent.name));
      const { attributes } = parseFrontMatter(file.toString());

      return {
        slug: dirent.name.replace(/\.mdx/, ''),
        //@ts-ignore
        title: attributes.meta.title,
      };
    }),
  );
  return posts;
}
