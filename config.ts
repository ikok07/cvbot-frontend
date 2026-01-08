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
        id: "rust",
        image: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-official.svg",
        label: "Rust",
        url: "https://rust-lang.org"
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
        type: "cli",
        technology_ids: ["rust"],
        name: "DX - Developer Experience Toolkit",
        description: {
            en: "A fast, efficient command-line tool built with Rust to streamline common developer tasks.",
            bg: "Бърз и ефикасен инструмент, създаден с Ръст, за да облекчи рутинни действия на програмиста"
        },
        githubURL: "https://github.com/ikok07/dxcli"
    },
    {
        type: "web",
        technology_ids: ["nextjs", "clerk", "neondb", "stripe", "figma"],
        name: "I&M NextGen Academy",
        description: {
            en: "A responsive and scalable web application for an educational academy, featuring modern UI/UX design, performance optimization, and clean architecture. Includes Clerk authentication, marketing and communication tools, a seamless user experience across devices, and integrated Stripe and DSK Bank credit payments for a smooth and convenient enrollment process.",
            bg: "Отзивчиво и мащабируемо уеб приложение за образователна академия, с модерен UI/UX дизайн, оптимизация на производителността и чиста архитектура. Включва удостоверяване с Clerk, маркетингови и комуникационни инструменти, безпроблемно потребителско изживяване на различни устройства и интегрирани плащания с кредитни карти чрез Stripe и ДСК Банка за лесен и удобен процес на записване."
        },
        githubURL: "https://github.com/ikok07/imnextgen-academy-v2.git",
        liveURL: "https://academy.imnextgen.bg"
    },
    {
        type: "web",
        technology_ids: ["nextjs", "clerk"],
        name: "CVBot Frontend (This website)",
        description: {
            en: "A professional portfolio website featuring an intelligent AI assistant chatbot that serves as a personal representative for client interactions. Built with modern web technologies. The AI assistant maintains professional communication standards while providing comprehensive information about skills, projects, and experience to potential employers and business contacts.",
            bg: "Професионален портфолио уебсайт, включващ интелигентен AI асистент чатбот, който служи като личен представител за взаимодействия с клиенти. Изграден с модерни уеб технологии. AI асистентът поддържа професионални стандарти за комуникация, като предоставя изчерпателна информация за умения, проекти и опит на потенциални работодатели и бизнес контакти."
        },
        githubURL: "https://github.com/ikok07/cvbot-frontend.git",
        // liveURL: ""
    },
    {
        type: "web",
        technology_ids: ["nextjs", "figma"],
        name: "Beauty Salon Appointment Booking Website",
        description: {
            en: "A responsive, user-friendly web application for a nail salon, featuring a streamlined appointment booking system. The platform offers a seamless user experience across devices, integrating the Google Calendar API. The design emphasizes clarity and ease of use, ensuring clients can effortlessly schedule their manicure appointments online.",
            bg: "Отзивчиво и лесно за използване уеб приложение за салон за нокти, с оптимизирана система за резервация на срещи. Платформата предлага безпроблемно потребителско изживяване на различни устройства, интегрирайки Google Calendar API. Дизайнът набляга на яснота и лекота на използване, гарантирайки, че клиентите могат лесно да планират своите маникюрни срещи онлайн."
        },
        liveURL: "https://www.evavnails.com"
    },
    {
        type: "mobile",
        technology_ids: ["swift"],
        name: "Wellsavor",
        description: {
            en: "An iOS application designed to track eating habits, featuring a user-friendly interface for logging meals and monitoring dietary patterns. Incorporated detailed recipe information, including comprehensive nutritional data and ingredient lists, to support informed dietary choices and promote healthy eating habits.",
            bg: "iOS приложение, предназначено за проследяване на хранителните навици, с лесен за използване интерфейс за записване на хранения и наблюдение на хранителните модели. Включва подробна информация за рецепти, включително изчерпателни хранителни данни и списъци с съставки, за да подпомогне информирани хранителни избори и насърчи здравословни хранителни навици."
        },
        githubURL: "https://github.com/ikok07/wellsavor-client.git"
    },
    {
        type: "ai",
        technology_ids: ["nextjs", "python", "fastapi", "langchain", "chromadb", "neondb", "nginx", "docker"],
        name: "CVBot Backend (The heart of this website)",
        description: {
            en: "A sophisticated AI-powered personal assistant backend that helps visitors learn about your professional profile through intelligent document retrieval and conversational AI.",
            bg: "Бекенд сървър с изкуствен интелект за личен асистент, който помага на посетителите да научат за вашия професионален профил чрез интелигентно извличане на документи."
        },
        githubURL: "https://github.com/ikok07/CVBot.git"
    },
    {
        type: "ai",
        technology_ids: ["python", "fastapi", "langchain", "chromadb", "neondb", "nginx", "docker"],
        name: "Basic RAG Backend Application",
        description: {
            en: "An AI Agent which you can ask about questions regarding information in a vector store",
            bg: "AI агент, на който можете да задавате въпроси относно информация във векторна база данни."
        },
        githubURL: "https://github.com/ikok07/agentic-rag-system.git"
    },
    {
        type: "embedded",
        technology_ids: ["clang", "stm32"],
        name: "STM32 Ambient Sensor",
        description: {
            en: "A real-time environmental monitoring system using an STM32 microcontroller with bare-metal programming. The project features custom drivers for all used peripherals of the MCU. Outputs sensor data to an LCD display for real-time monitoring.",
            bg: "Система за мониторинг на околната среда в реално време, използваща микроконтролер STM32 с програмиране на ниско ниво. Проектът включва персонализирани драйвери за всички използвани периферни устройства на MCU. Извежда данни от сензори на LCD дисплей за мониторинг в реално време."
        },
        githubURL: "https://github.com/ikok07/stm32-ambient-sensor.git"
    },
    {
        type: "embedded",
        technology_ids: ["clang", "stm32", "kicad"],
        name: "STM32 Digital Potentiometer",
        description: {
            en: "Firmware project for the STM32F427 microcontroller, featuring control of a digital potentiometer. Employed the STM32 Hardware Abstraction Layer (HAL) for streamlined peripheral management, incorporating SPI/I2C communication. Integrated an encoder as input, with the signal converted to analog using the onboard DAC to emulate potentiometer functionality in embedded systems.",
            bg: "Фърмуерен проект за микроконтролер STM32F427, включващ управление на цифров потенциометър. Използва се STM32 Hardware Abstraction Layer (HAL) за опростено управление на периферни устройства, включващо SPI/I2C комуникация. Интегриран е енкодер като вход, като сигналът се преобразува в аналогов с помощта на вградения DAC, за да имитира функционалността на потенциометър във вградени системи."
        },
        githubURL: "https://github.com/ikok07/stm32f427-digital-potentiometer.git"
    },
    {
        type: "pcb_design",
        technology_ids: ["kicad"],
        name: "STM32 Digital Potentiometer PCB",
        description: {
            en: "PCB Design for the 'STM32 Digital Potentiometer' project",
            bg: "Дизайн на печатна платка за проекта 'STM32 Digital Potentiometer'"
        },
        githubURL: "https://github.com/ikok07/stm32_digital_potentiometer_pcb.git"
    },
]