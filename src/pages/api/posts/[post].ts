import { getPost } from '@/utils/getPostRelatedData'
import { Post } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Post | {}>
) {
	return res.json(getPost(req.query.post as string))
}
