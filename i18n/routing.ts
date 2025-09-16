import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "bg"],
    localePrefix: "as-needed",
    defaultLocale: "en"
})