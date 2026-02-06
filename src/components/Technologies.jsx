import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { fadeUp } from "../animation";

const technologies = [

    {
        name: 'Spring Boot',
        icon: <Icon icon="logos:spring-icon" className="w-7 h-7" />
    },
    {
        name: 'Spring Security',
        icon: <Icon icon="simple-icons:springsecurity" className="w-7 h-7 text-[#6db33f]" />
    },
    {
        name: 'Java',
        icon: <Icon icon="logos:java" className="w-7 h-7" />
    },
    {
        name: 'React',
        icon: <Icon icon="logos:react" className="w-7 h-7" />
    },
    {
        name: 'JavaScript',
        icon: <Icon icon="logos:javascript" className="w-7 h-7" />
    },
    {
        name: 'MySql',
        icon: <Icon icon="logos:mysql" className="w-7 h-7" />
    },
    {
        name: 'Tailwind CSS',
        icon: <Icon icon="devicon:tailwindcss" className="w-7 h-7" />
    },
    {
        name: 'Html',
        icon: <Icon icon="vscode-icons:file-type-html" className="w-7 h-7" />
    },
    {
        name: 'Css',
        icon: <Icon icon="skill-icons:css" className="w-7 h-7" />
    },
    {
        name: 'Git',
        icon: <Icon icon="devicon:git" className="w-7 h-7" />
    },
    {
        name: 'GitHub',
        icon: <Icon icon="akar-icons:github-fill" className="w-7 h-7" />
    },
    {
        name: 'Docker',
        icon: <Icon icon="logos:docker-icon" className="w-7 h-7" />
    },

]

const Technologies = () => {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="py-20 sm:py-32 bg-bg-secondary">

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 justify-center items-center">
                <h2 className="text-3xl sm:text-4xl font-bold">Tecnologías</h2>
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 text-center">
                    {
                        technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 p-4 bg-bg-primary rounded-xl border border-[#1E293B] hover:border-accent/50 hover:scale-105 transition-all duration-300 group"
                            >
                                <div className=" bg-bg-secondary rounded-xl w-12 h-12 flex justify-center items-center ">
                                    {tech.icon}
                                </div>
                                <span className="text-xs sm:text-sm font-medium text-text-secondary group-hover:text-text-primary">{tech.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </motion.section>
    )
}

export default Technologies;