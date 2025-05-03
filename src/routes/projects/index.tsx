import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/projects/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='container mx-auto w-full h-full'>
			<div className='mt-12 w-full'>
				<p className='text-white text-center text-3xl'>My Projects</p>
			</div>
			<div className='flex gap-2 w-full justify-center items-center h-full my-3'>
				<a
					href='https://github.com/tobynguyen27'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md
				 hover:(bg-white/20 text-white border-white)'>
					<i className='i-simple-icons-curseforge text-gray-300 group-hover:text-white' />
					<p className='text-gray-300 group-hover:text-white'>
						GitHub
					</p>
				</a>
				<a
					href='https://www.curseforge.com/members/tobynguyen/projects'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md
				 hover:(bg-[#eb622b]/20 text-[#eb622b] border-[#eb622b])'>
					<i className='i-simple-icons-curseforge text-gray-300 group-hover:text-[#eb622b]' />
					<p className='text-gray-300 group-hover:text-[#eb622b]'>
						CurseForge
					</p>
				</a>
				<a
					href='https://modrinth.com/user/tobynguyen27'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md
				 hover:(bg-[#1bd96a]/20 text-[#1bd96a] border-[#1bd96a])'>
					<i className='i-simple-icons-modrinth text-gray-300 group-hover:text-[#1bd96a]' />
					<p className='text-gray-300 group-hover:text-[#1bd96a]'>
						Modrinth
					</p>
				</a>
			</div>
		</div>
	)
}
