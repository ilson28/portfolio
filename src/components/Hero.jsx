import { motion } from "motion/react"
import img from "../assets/images/fondo-blanco.png";

const animation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }

}
const Hero = () => {

    return (
        <section className="min-h-screen flex flex-col gap-5 justify-center items-center">

            {/* Profile picture */}
            <div>
                <motion.img
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover hover:outline-2 hover:outline-offset-4 hover:outline-accent hover:scale-105 cursor-pointer transition-all transition-duration-300"
                    src={img}
                    alt="Ilson Diaz" />
            </div>

            {/* Name user */}
            <motion.h1
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}

                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                Ilson Díaz
            </motion.h1>

            {/*  Rol title */}
            <motion.p
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}

                className="text-accent text-xl sm:text-2xl font-medium">
                Desarrollador Full Stack
            </motion.p>

            {/* Stack */}
            <motion.p
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}

                className="text-base sm:text-lg text-text-secondary">
                Java · Spring Boot · React
            </motion.p>

            {/*Buttom contact */}
            <motion.a
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}

                className="block py-3 px-8 bg-accent text-bg-primary font-medium rounded-xl hover:scale-105 transition-transform"
                href="#contact">
                Ver Contacto
            </motion.a>


        </section>
    )
}

export default Hero