import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import comfortaa from '@/utils/NextFont'
import './globals.css'

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
					{children}
				</div>
				<Footer />
			</body>
		</html>
	)
}
