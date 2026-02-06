import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { fadeUp } from "../animation"

const courses = [

    {
        title: "Máster Completo Java de cero a experto (+163hrs)",
        platform: "Udemy",
        icon: "logos:java",
        doc: "/docs/certificadoJavaCurso.pdf"
    },
    {
        title: "Javascript: El Curso Completo, Práctico y desde Cero (+34hrs)",
        platform: "Udemy",
        icon: "logos:javascript",
        doc: "/docs/certificadoJavaScriptCurso.pdf"
    }
]

const Education = () => {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* TITLE */}
            <h2 className="font-bold text-3xl sm:text-4xl text-center">Educación</h2>

            {/* EDUCATION CONTAINER */}
            <div className="space-y-12" >

                {/* ACADEMIC EDUCATION */}
                <div className="space-y-6">

                    {/* // Title */}
                    <div className="flex gap-2 items-center">
                        <Icon icon="mdi:education-outline" className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-semibold">Formación Acadécima</h3>
                    </div>

                    {/* // Education Card */}
                    <div className="p-6 space-y-2 rounded-xl bg-bg-secondary border border-[#1E293B]  hover:border-accent/50 transition-all duration-300">
                        <h4 className="text-lg font-semibold">Ingeniería de Sistemas</h4>
                        <p className="text-accent">Universidad Libre - Seccional Barranquilla</p>
                        <p className="text-text-secondary text-sm italic">En etapa final (2021 - Actualidad)</p>
                    </div>
                </div>

                {/* FEATURED COURSES */}
                <div className="space-y-6">

                    {/* // Title */}
                    <div className="flex gap-2 items-center">
                        <Icon icon="mdi:award" className="w-6 h-6 text-accent" />
                        <h3 className="text-xl font-semibold">Cursos Destacados</h3>
                    </div>

                    {/* // Courses List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">


                        {
                            courses.map((course, index) => (

                                <div
                                    key={index}
                                    className="space-y-5 p-6 rounded-xl bg-bg-secondary border border-[#1E293B] hover:border-accent/50 transition-all duration-300">

                                    <div className="flex justify-center items-center rounded-xl bg-bg-primary py-4 border border-[#1E293B]">
                                        <Icon icon={course.icon} className="w-14 h-14 text-accent" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-semibold text-lg text-balance">
                                            {course.title}
                                        </h4>
                                        <span className="text-sm text-text-secondary">{course.platform}</span>
                                    </div>
                                    <a
                                        download={true}
                                        href={course.doc}
                                        className="px-4 py-2.5 text-sm inline-block bg-bg-primary text-center rounded-lg border border-[#1E293B] hover:text-accent hover:border-accent transition-all duration-300 font-medium">
                                        Ver Certificado
                                    </a>

                                </div>
                            )
                            )
                        }



                    </div>

                </div>
            </div>
        </motion.section>
    )
}

export default Education