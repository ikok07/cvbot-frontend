import {Footer, FooterBottom, FooterColumn, FooterContent} from "@/components/ui/footer";
import FooterNavLinks from "@/components/homepage/footer/FooterNavLinks";
import FooterRows from "@/components/homepage/footer/FooterRows";
import FooterColumnHeading from "@/components/homepage/footer/FooterColumnHeading";
import FooterIconRow from "@/components/homepage/footer/FooterIconRow";
import {IoLogoGithub, IoLogoInstagram, IoLogoLinkedin} from "react-icons/io";
import {IoCall, IoMail} from "react-icons/io5";

export default function HomepageFooter() {
    return <footer>
        <Footer className="bg-primary text-primary-foreground">
            <FooterContent className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[95%] mx-auto">
                <FooterColumn className="lg:col-start-2">
                    <FooterColumnHeading>Навигация</FooterColumnHeading>
                    <FooterRows>
                        <FooterNavLinks />
                    </FooterRows>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnHeading>Контакти</FooterColumnHeading>
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
                    <FooterColumnHeading>Социални мрежи</FooterColumnHeading>
                    <FooterRows>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoLinkedin}
                            href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL!}
                        >
                            LinkedIn Account
                        </FooterIconRow>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoGithub}
                            href={process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL!}
                        >
                            GitHub Account
                        </FooterIconRow>
                        <FooterIconRow
                            /* @ts-ignore */
                            Icon={IoLogoInstagram}
                            href={process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL!}
                        >
                            Instagram Account
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