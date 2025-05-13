import { createFileRoute } from "@tanstack/react-router"
import ProjectItem, { ProjectItemProps } from "@/components/ProjectItem"

import projects from "@/assets/data/projects.json"

export const Route = createFileRoute("/projects/")({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className='container mx-auto w-full h-full'>
			<div className='mt-12 w-full'>
				<p className='text-white text-center text-3xl'>My Projects</p>
			</div>
			<div className='flex flex-wrap gap-2 w-full justify-center items-center h-full my-3'>
				<a
					href='https://github.com/tobynguyen27'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md duration-300
				 hover:(bg-white/20 text-white border-white)'>
					<i className='i-simple-icons-github text-gray-300 group-hover:text-white duration-300' />
					<p className='text-gray-300 group-hover:text-white duration-300'>
						GitHub
					</p>
				</a>
				<a
					href='https://www.curseforge.com/members/tobynguyen/projects'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md duration-300
				 hover:(bg-[#eb622b]/20 text-[#eb622b] border-[#eb622b])'>
					<i className='i-simple-icons-curseforge text-gray-300 group-hover:text-[#eb622b] duration-300' />
					<p className='text-gray-300 group-hover:text-[#eb622b] duration-300'>
						CurseForge
					</p>
				</a>
				<a
					href='https://modrinth.com/user/tobynguyen27'
					className='group flex items-center gap-1 hover:cursor-pointer border border-gray-300 p-2 rounded-md duration-300
				 hover:(bg-[#1bd96a]/20 text-[#1bd96a] border-[#1bd96a])'>
					<i className='i-simple-icons-modrinth text-gray-300 group-hover:text-[#1bd96a] duration-300' />
					<p className='text-gray-300 group-hover:text-[#1bd96a] duration-300'>
						Modrinth
					</p>
				</a>
			</div>
			<div className='mt-12 w-full h-full grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
				{(projects as ProjectItemProps[]).map(project => (
					<ProjectItem
						icon={project.icon}
						name={project.name}
						description={project.description}
						url={project.url}
					/>
				))}
			</div>
		</div>
	)
}
