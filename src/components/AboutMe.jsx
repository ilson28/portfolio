import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { fadeUp } from "../animation"

const AboutMe = () => {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="py-20 sm:py-32 bg-bg-secondary">

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">

                <h2 className="text-3xl sm:text-4xl font-bold">
                    Sobre mí
                </h2>
                <div className="space-y-5">

                    <p className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                        Estudiante de Ingeniería de Sistemas en último semestre, enfocado en el desarrollo de aplicaciones web con Java, Spring Boot y React. Me interesa construir software bien pensado, con lógica clara, arquitectura limpia y código mantenible, más allá de que simplemente “funcione”.
                    </p>

                    <div className="flex items-center gap-1 justify-center text-text-secondary/60">
                        <Icon icon="weui:location-outlined" className="w-5 h-5" />
                        <span className="text-sm font-light">Barranquilla, Colombia</span>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutMe