import {SignIn} from "@clerk/nextjs";

export default function Page() {
    return <div className="grid place-content-center min-h-[100vh] py-10">
        <SignIn />
    </div>
}