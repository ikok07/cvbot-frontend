import {auth, currentUser} from "@clerk/nextjs/server";
import CopyJwtTokenButton from "@/components/admin/CopyJWTTokenButton";

export default async function Page() {
    const user = await currentUser();
    const {getToken} = await auth()

    if (!user) return <div>Not signed in!</div>

    return <div className="grid place-content-center min-h-[100vh] max-w-[20rem] text-center mx-auto">
        <h2><strong>User ID:</strong> {user.id}</h2>
        <CopyJwtTokenButton />
    </div>
}