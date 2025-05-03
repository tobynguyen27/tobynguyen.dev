import { Link } from "@tanstack/react-router"

export default function NavBar() {
	return (
		<nav className='w-full h-36 sm:h-24 flex justify-center items-center'>
			<div className='w-full h-full flex flex-col sm:flex-row items-center justify-between sm:gap-12'>
				<div className='sm:pl-12 w-full h-full flex justify-center sm:justify-start items-center'>
					<p className='text-white text-3xl font-mono text-center'>
						Toby Nguyen_
					</p>
				</div>
				<div className='w-full h-full flex gap-8 items-center justify-center sm:justify-end h-full sm:pr-12'>
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
					<a
						href={"https://github.com/tobynguyen27"}
						target='_blank'
						className='hidden sm:block'>
						<button className='i-lucide-github text-xl text-gray-300 hover:text-white hover:cursor-pointer' />
					</a>
				</div>
			</div>
		</nav>
	)
}
