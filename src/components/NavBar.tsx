import { Link } from "@tanstack/react-router"

export default function NavBar() {
	return (
		<nav className='w-full h-24 flex justify-center items-center'>
			<div className='w-full h-full flex items-center justify-between gap-12'>
				<div className=''>
					<p className='text-white text-3xl font-mono'>
						Toby Nguyen_
					</p>
				</div>
				<div className='flex gap-8 items-center h-full'>
					<Link to='/'>
						<p className='text-gray-300 hover:text-white duration-300 text-xl'>
							Home
						</p>
					</Link>
					<Link to='/blog'>
						<p className='text-gray-300 hover:text-white duration-300 text-xl'>
							Blog
						</p>
					</Link>
					<a href={"https://github.com/tobynguyen27"} target='_blank'>
						<button className='i-lucide-github text-xl text-gray-300 hover:text-white hover:cursor-pointer' />
					</a>
				</div>
			</div>
		</nav>
	)
}
