import {Footer, FooterBottom, FooterColumn, FooterContent} from "@/components/ui/footer";
import FooterNavLinks from "@/components/homepage/footer/FooterNavLinks";
import FooterRows from "@/components/homepage/footer/FooterRows";
import FooterColumnHeading from "@/components/homepage/footer/FooterColumnHeading";
import FooterIconRow from "@/components/homepage/footer/FooterIconRow";
import {IoLogoGithub, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
import {IoCall, IoMail} from "react-icons/io5";
import {getTranslations} from "next-intl/server";

export default async function HomepageFooter() {

    const tCommon = await getTranslations("Home.Common");
    const t = await getTranslations("Home.Footer");

    return <footer>
        <Footer className="bg-primary text-primary-foreground">
            <FooterContent className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[95%] mx-auto">
                <FooterColumn className="lg:col-start-2">
                    <FooterColumnHeading>{t("navigationHeading")}</FooterColumnHeading>
                    <FooterRows>
                        <FooterNavLinks />
                    </FooterRows>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnHeading>{t("contactHeading")}</FooterColumnHeading>
                    <FooterRows>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoMail}
                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS!}`}
                        >
                            {process.env.NEXT_PUBLIC_EMAIL_ADDRESS!}
                        </FooterIconRow>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoCall}
                            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER!}`}
                        >
                            {process.env.NEXT_PUBLIC_PHONE_NUMBER!}
                        </FooterIconRow>
                    </FooterRows>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnHeading>{t("socialMediaHeading")}</FooterColumnHeading>
                    <FooterRows>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoLinkedin}
                            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL!}
                        >
                            LinkedIn {tCommon("accountCapital")}
                        </FooterIconRow>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoGithub}
                            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL!}
                        >
                            GitHub {tCommon("accountCapital")}
                        </FooterIconRow>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoInstagram}
                            href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL!}
                        >
                            Instagram {tCommon("accountCapital")}
                        </FooterIconRow>
                    </FooterRows>
                </FooterColumn>
            </FooterContent>
            <FooterBottom className="text-sm text-primary-foreground text-center flex justify-center">
                <p>Designed and Created by <a href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL!} target="_blank">@Kaloyan Stefanov</a></p>
            </FooterBottom>
        </Footer>
    </footer>
}