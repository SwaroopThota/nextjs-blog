import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import comfortaa from '@/utils/NextFont'
import './globals.css'

export const metadata = {
	viewport: 'width=device-width, initial-scale=1',
	description: 'A Blog for the nerds by the nerds.',
	icons: '/favicon.ico',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' className={comfortaa.variable}>
			<body>
				<Navbar />
				<div className='container text-sm p-3 min-h-homepage'>
					<Breadcrumbs />
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
