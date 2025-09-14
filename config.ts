import {Technology} from "@/models/technology";
import {Project} from "@/models/project";

export const TECHNOLOGIES: Technology[] = [
    {
        id: "nodejs",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        label: "NodeJS",
        url: "https://nodejs.org"
    },
    {
        id: "react",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        label: "React",
        url: "https://reactjs.org"
    },
    {
        id: "nextjs",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        label: "NextJS",
        url: "https://nextjs.org"
    },
    {
        id: "stripe",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
        label: "Stripe",
        url: "https://stripe.com"
    },
    {
        id: "clerk",
        image: "https://cdn.prod.website-files.com/64c7a317aea92912392c0420/65aaac10cefb21924a62692b_clerk-purple-logo.png",
        label: "Clerk",
        url: "https://clerk.com"
    },
    {
        id: "neondb",
        image: "/neon.png",
        label: "NeonDB",
        url: "https://neon.tech"
    },
    {
        id: "golang",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        label: "Golang",
        url: "https://golang.org"
    },
    {
        id: "clang",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        label: "Clang",
        url: "https://clang.llvm.org"
    },
    {
        id: "stm32",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/ST_logo_2020_blue_V.svg",
        label: "STM32",
        url: "https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html"
    },
    {
        id: "kicad",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/KiCad-Logo.svg",
        label: "KiCad",
        url: "https://www.kicad.org"
    },
    {
        id: "swift",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        label: "Swift",
        url: "https://swift.org"
    },
    {
        id: "csharp",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        label: "C#",
        url: "https://docs.microsoft.com/en-us/dotnet/csharp/"
    },
    {
        id: "python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        label: "Python",
        url: "https://python.org"
    },
    {
        id: "fastapi",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/FastAPI_logo.svg",
        label: "FastAPI",
        url: "https://fastapi.tiangolo.com"
    },
    {
        id: "langchain",
        image: "https://python.langchain.com/img/brand/wordmark.png",
        label: "LangChain",
        url: "https://langchain.com"
    },
    {
        id: "chromadb",
        image: "/chroma.webp",
        label: "ChromaDB",
        url: "https://www.trychroma.com/"
    },
    {
        id: "figma",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        label: "Figma",
        url: "https://figma.com"
    },
    {
        id: "nginx",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        label: "NGINX",
        url: "https://nginx.org"
    },
    {
        id: "docker",
        image: "https://logo.svgcdn.com/l/docker-icon.svg",
        label: "Docker",
        url: "https://docker.com"
    }
]

export const PROJECTS: Project[] = [
    {
        type: "web",
        technology_ids: ["nextjs", "clerk", "neondb", "stripe", "figma"],
        // image: "https://academy.imnextgen.bg/banner.jpg",
        name: "I&M NextGen Academy",
        description: "A responsive and scalable web application for an educational academy, featuring modern UI/UX design, performance optimization, and clean architecture. Includes Clerk authentication, marketing and communication tools, a seamless user experience across devices, and integrated Stripe and DSK Bank credit payments for a smooth and convenient enrollment process.",
        githubURL: "https://github.com/ikok07/imnextgen-academy-v2.git",
        liveURL: "https://academy.imnextgen.bg"
    },
    {
        type: "web",
        technology_ids: ["nextjs", "figma"],
        name: "Beauty Salon Appointment Booking Website",
        description: "A responsive, user-friendly web application for a nail salon, featuring a streamlined appointment booking system. The platform offers a seamless user experience across devices, integrating the Google Calendar API. The design emphasizes clarity and ease of use, ensuring clients can effortlessly schedule their manicure appointments online.",
        liveURL: "https://www.evavnails.com"
    },
    {
        type: "mobile",
        technology_ids: ["swift"],
        name: "Wellsavor",
        description: "An iOS application designed to track eating habits, featuring a user-friendly interface for logging meals and monitoring dietary patterns. Incorporated detailed recipe information, including comprehensive nutritional data and ingredient lists, to support informed dietary choices and promote healthy eating habits.",
        githubURL: "https://github.com/ikok07/wellsavor-client.git"
    },
    {
        type: "ai",
        technology_ids: ["nextjs", "python", "fastapi", "langchain", "chromadb", "neondb", "nginx", "docker"],
        name: "CVBot Backend (The heart of this website)",
        description: "A sophisticated AI-powered personal assistant backend that helps visitors learn about your professional profile through intelligent document retrieval and conversational AI.",
        githubURL: "https://github.com/ikok07/CVBot.git"
    },
    {
        type: "ai",
        technology_ids: ["python", "fastapi", "langchain", "chromadb", "neondb", "nginx", "docker"],
        name: "Basic RAG Backend Application",
        description: "An AI Agent which you can ask about questions regarding information in a vector store",
        githubURL: "https://github.com/ikok07/agentic-rag-system.git"
    },
    {
        type: "embedded",
        technology_ids: ["clang", "stm32"],
        name: "STM32 Ambient Sensor",
        description: "A real-time environmental monitoring system using an STM32 microcontroller with bare-metal programming. The project features custom drivers for all used peripherals of the MCU. Outputs sensor data to an LCD display for real-time monitoring.",
        githubURL: "https://github.com/ikok07/stm32-ambient-sensor.git"
    },
    {
        type: "embedded",
        technology_ids: ["clang", "stm32", "kicad"],
        name: "STM32 Digital Potentiometer",
        description: "Firmware project for the STM32F427 microcontroller, featuring control of a digital potentiometer. Employed the STM32 Hardware Abstraction Layer (HAL) for streamlined peripheral management, incorporating SPI/I2C communication. Integrated an encoder as input, with the signal converted to analog using the onboard DAC to emulate potentiometer functionality in embedded systems.",
        githubURL: "https://github.com/ikok07/stm32f427-digital-potentiometer.git"
    },
    {
        type: "pcb_design",
        technology_ids: ["kicad"],
        name: "STM32 Digital Potentiometer PCB",
        description: "PCB Design for the 'STM32 Digital Potentiometer' project",
        githubURL: "https://github.com/ikok07/stm32_digital_potentiometer_pcb.git"
    },
]