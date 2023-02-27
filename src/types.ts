export interface PostTitle {
	title: string
	slug: string
	author: string
	date: Date
	lang: string
}

export interface Post extends PostTitle {
	content: string
}

export interface PostTitlePage {
	postTitles: PostTitle[]
	isFirstPage?: boolean
	isLastPage?: boolean
	pageNo: number
}
