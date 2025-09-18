export default function getLocaleFlag(locale: string) {
    switch (locale) {
        case "bg":
            return "https://flagcdn.com/h20/bg.png"
        default:
            return "https://flagcdn.com/h20/gb.png"
    }
}