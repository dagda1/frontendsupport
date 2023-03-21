import parseFrontMatter from 'front-matter';
import fs from 'fs/promises';
import path from 'path';
import { bundleMDX } from './mdx.server';
import remarkFootnotes from 'remark-footnotes';
import remarkMdxImages from 'remark-mdx-images';
import remarkBreaks from 'remark-breaks';
import { remarkCodeTitles } from './remark-code-title';
import { remarkImgToJsx } from './remark-img-to-jsx';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';
import { remarkInlineCodeLanguage } from './remark-inline-code-language';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

const root = process.cwd();

export async function getPost(slug: string) {
  console.dir({ slug, a: __dirname });
  const source = await fs.readFile(path.join(`${__dirname}/../blog-posts`, `${slug}.mdx`), 'utf-8');

  console.dir({ source });
  const { default: remarkGfm } = await import('remark-gfm');
  const { default: rehypeAutolinkHeadings } = await import('rehype-autolink-headings');

  const { default: rehypeToc } = await import('rehype-toc');
  const { default: rehypeSlug } = await import('rehype-slug');

  const post = await bundleMDX({
    source,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
        remarkGfm,
        remarkBreaks,
        remarkCodeTitles,
        remarkInlineCodeLanguage,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // remarkImgToJsx as any,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeToc,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
        [
          rehypeRaw,
          {
            passThrough: [
              'mdxjsEsm',
              'mdxFlowExpression',
              'mdxTextExpression',
              'mdxJsxFlowElement',
              'mdxJsxTextElement',
            ],
          },
        ],
      ];

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
