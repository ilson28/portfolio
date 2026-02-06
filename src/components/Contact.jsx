
import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { fadeUp } from "../animation"
const contacts = [

    {
        icon: "material-symbols-light:mail-outline-rounded",
        name: "Correo Electrónico",
        link: "mailto:ilsondiazmorelo28@gmail.com",
        description: "ilsondiazmorelo28@gmail.com"
    },
    {
        icon: "akar-icons:github-fill",
        name: "GitHub",
        link: "https://github.com/ilson28",
        description: "github.com/ilson28"
    },
    {
        icon: "meteor-icons:linkedin",
        name: "Linkedin",
        link: "https://www.linkedin.com/in/ilsondiaz/",
        description: "linkedin.com/in/ilsondiaz/"
    },
]

const Contact = () => {
    return (
        <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-12 px-4 sm:px-6 lg:px-8 pb-20" id="contact">
            <h2 className="text-center text-3xl sm:text-4xl font-bold">Contacto</h2>

            <div className="space-y-8">

                <div className="flex flex-col gap-4">

                    {
                        contacts.map((contact, index) => (
                            <a
                                key={index}
                                className="group bg-bg-secondary p-5 rounded-xl border border-[#1E293B] hover:border-[#38BDF8]/50 transition-all duration-30 "
                                href={contact.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="flex gap-4 items-center">
                                    <div className="rounded-lg w-12 h-12 bg-bg-primary flex justify-center items-center border border-[#1E293B] group-hover:border-accent/50 group-hover:text-accent transition-colors duration-300">
                                        <Icon icon={contact.icon} className="w-5 h-5 " />
                                    </div>
                                    <div>
                                        <p className="text-text-secondary text-sm">{contact.name}</p>
                                        <p className="group-hover:text-accent">{contact.description}</p>
                                    </div>
                                </div>

                            </a>
                        ))
                    }
                </div>
                <a
                    download={true}
                    className="bg-accent text-bg-primary rounded-xl p-4 flex gap-1 justify-center items-center hover:bg-bg-primary hover:text-accent border hover:border-accent transition-all duration-300 font-medium"
                    href="/docs/IlsonDiazfullstack.pdf">
                    <Icon icon="mdi:file-download-outline" className="w-5 h-5" />
                    <p>Descargar CV</p>
                </a>

            </div>
        </motion.section>
    )
}

export default Contact