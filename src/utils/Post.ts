export interface PostTitle {
	title: string | undefined
	slug: string | undefined
	author: string | 'Swaroop' | undefined
	date: Date | undefined
	lang: string | undefined | undefined
}

export interface Post extends PostTitle {
	content: string | undefined
	foundPost: boolean
}
