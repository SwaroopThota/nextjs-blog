import { PostTitle, Post } from './Post'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getPostSlugs() {
	const slugs = readdirSync(path.join(process.cwd(), 'posts'))
	return slugs
}

export function getPostTitles(pageNo: number): PostTitle[] {
	const slugs = getPostSlugs()
	const postTitles = slugs.splice((pageNo - 1) * 15, 15).map((slug) => {
		const file = readFileSync(path.join(process.cwd(), `posts/${slug}`))
		const { data } = matter(file)
		return data as PostTitle
	})
	return postTitles
}

export function getPost(postSlug: string): Post {
	try {
		const file = readFileSync(
			path.join(process.cwd(), `posts/${postSlug}.mdx`)
		)
		const { data, content } = matter(file)
		return { ...data, content, foundPost: true } as Post
	} catch (err) {
		return { foundPost: false } as Post
	}
}
