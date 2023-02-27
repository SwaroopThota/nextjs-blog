import { PostTitlePage } from './../types'
import { PostTitle, Post } from '../types'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getPostSlugs() {
	const slugs = readdirSync(path.join(process.cwd(), 'posts'))
	return slugs
}

export function getPostTitles(
	searchString: string,
	pageNo: number
): PostTitlePage {
	let slugs = getPostSlugs()
	let postTitles = slugs.map((slug) => {
		const file = readFileSync(path.join(process.cwd(), `posts/${slug}`))
		const { data } = matter(file)
		return data as PostTitle
	})
	let pattern = searchString
		.split('')
		.map((x) => {
			return `(?=.*${x})`
		})
		.join('')
	let regex = new RegExp(`${pattern}`, 'g')
	postTitles = postTitles.filter((post) => post.title.match(regex))
	// TODO: sort posts accd to their post dates
	// postTitles = postTitles.sort(
	// 	(a, b) =>
	// 		new Date(a.date).getMilliseconds() -
	// 		new Date(b.date).getMilliseconds()
	// )
	let totalPages = Math.floor((postTitles.length + 15) / 15)
	if (pageNo < 1 || pageNo > totalPages) pageNo = 1
	postTitles = postTitles.splice(15 * (pageNo - 1), 15)
	const postTitlePage: PostTitlePage = { postTitles, pageNo }
	if (pageNo && pageNo === 1) postTitlePage.isFirstPage = true
	if (pageNo && pageNo === totalPages) postTitlePage.isLastPage = true
	return postTitlePage
}

export function getPost(postSlug: string): Post | {} {
	try {
		const file = readFileSync(
			path.join(process.cwd(), `posts/${postSlug}.mdx`)
		)
		const { data, content } = matter(file)
		return { ...data, content } as Post
	} catch (err) {
		return {}
	}
}
