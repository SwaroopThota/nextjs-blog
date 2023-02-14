import { getPost } from '@/utils/getPostRelatedData'

export default function Head({
	params: { slug },
}: {
	params: { slug: string }
}) {
	return (
		<>
			<title>{getPost(slug).title}</title>
		</>
	)
}
