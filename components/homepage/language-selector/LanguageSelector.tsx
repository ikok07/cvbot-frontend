"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {useLocale, useTranslations} from "next-intl";
import ShadowButton from "@/components/ui/buttons/ShadowButton";
import Image from "next/image";
import getLocaleFlag from "@/utils/getLocaleFlag";
import {cn} from "@/lib/utils";
import {useRouter} from "@/i18n/navigation";
import {useViewLoaded} from "@/hooks/useViewLoaded";

type LanguageSelectorProps = {
    className?: string
}

export default function LanguageSelector({className}: LanguageSelectorProps) {
    const {viewLoaded} = useViewLoaded();
    const locale = useLocale();
    const t = useTranslations("Common.Locales");
    const router = useRouter();

    const optionClassName = "cursor-pointer flex items-center gap-3 focus:bg-border/85 focus:text-background-foreground"

    function handleClick(locale: string) {
        router.push("/", {locale});
    }

    if (!viewLoaded) return;

    return <div className={
        cn(
            "w-max",
            className
        )
    }>
        <DropdownMenu>
            <DropdownMenuTrigger asChild={true}>
                <ShadowButton className="border border-border rounded-full">
                    <div className="relative w-4 aspect-square rounded-full overflow-hidden"><Image src={getLocaleFlag(locale)} alt={locale} fill className="object-cover"/></div>
                    {t(locale)}
                </ShadowButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup className="space-y-1">
                    <DropdownMenuItem onClick={() => handleClick("en")} className={cn(
                        optionClassName,
                        {
                            "cursor-default bg-primary text-primary-foreground": locale === "en"
                        }
                    )}>
                        <div className="relative w-4 aspect-square rounded-full overflow-hidden"><Image src={getLocaleFlag("en")} alt={"en"} fill className="object-cover"/></div>
                        {t("en")}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleClick("bg")} className={cn(
                        optionClassName,
                        {
                            "cursor-default bg-primary text-primary-foreground": locale === "bg"
                        }
                    )}>
                        <div className="relative w-4 aspect-square rounded-full overflow-hidden"><Image src={getLocaleFlag("bg")} alt={"bg"} fill className="object-cover"/></div>
                        {t("bg")}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
}