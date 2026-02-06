import { motion } from "motion/react"
import { Icon } from "@iconify/react";
import { fadeUp } from "../animation";
const technologies = ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS", "Docker"];
const features = [
    "Registrar, actualizar y visualizar videojuegos.",
    "Gestionar ventas y alquileres de videojuegos.",
    "Visualizar el historial de transacciones realizadas."
];
const Proyects = () => {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full max-w-5xl mx-auto flex flex-col gap-16 justify-center items-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
                Proyecto Destacado
            </h2>

            {/* CARD CONTAINER */}
            <div className="w-full flex flex-col gap-8 bg-bg-secondary p-8 sm:p-10 lg:p-12 rounded-xl border border-[#1E293B] hover:border-accent transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">

                {/* TITLE AND SUBTILE */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-3xl sm:text-4xl font-bold ">GameHub</h3>
                    <p className="text-lg text-accent font-medium">Sistema de Gestión de Videojuegos</p>
                </div>

                {/* DESCRIPTION */}
                <p className="text-text-secondary leading-relaxed text-lg max-w-3xl">
                    GameHub es una aplicación web para la gestión de un catálogo de videojuegos, que permite registrar, visualizar, buscar y filtrar videojuegos mediante una interfaz moderna y responsive.
                </p>

                {/*  TECHNOLOGIES */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold uppercase">Tecnologías</h4>
                    <div className="flex flex-wrap gap-3">
                        {technologies.map(tech => (
                            <span
                                key={tech}
                                className="px-4 py-2 text-sm bg-bg-primary text-text-secondary rounded-lg border border-[#1E293B] hover:border-accent/50 hover:text-text-primary transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* FEATURES  */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold uppercase">Funcionalidades</h4>

                    <ul className="space-y-3 text-base text-text-secondary">


                        {
                            features.map((feature, index) =>
                                <li
                                    key={index}
                                    className="flex items-start gap-3">
                                    <span className="text-accent">•</span>
                                    <p>{feature}</p>
                                </li>)}


                    </ul>
                </div>

                {/*  LINKS */}
                <div className="flex flex-col gap-4 sm:flex-row">
                    <a
                        className='flex items-center justify-center gap-2 bg-bg-primary px-5 py-2.5 rounded-xl border border-[#1E293B] hover:text-accent hover:border-accent transition-all duration-300 font-medium'
                        href="https://github.com/ilson28/Gamehub"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="proicons:github" className="w-5 h-5" />
                        <span>Repositorio en GitHub</span>
                    </a>
                    <a
                        className='text-bg-primary flex items-center justify-center gap-2 bg-accent px-5 py-2.5 rounded-xl border hover:border-accent hover:text-text-primary hover:bg-bg-primary transition-all duration-300 font-medium'
                        href="https://gamehub-six-beta.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Icon icon="quill:link-out" className="w-5 h-5" />
                        <span>Demo</span>
                    </a>
                </div>
            </div>
        </motion.section>
    )
}

export default Proyects