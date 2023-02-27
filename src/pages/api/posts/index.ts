import { PostTitlePage } from './../../../types'
import { getPostTitles } from '@/utils/getPostRelatedData'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PostTitlePage>
) {
	const searchString: string = req.query.search
		? (req.query.search as string)
		: ''
	const pageNo: number = req.query.page
		? parseInt(req.query.page as string)
		: 1
	return res.status(200).json(getPostTitles(searchString, pageNo))
}
