import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | FullStock"
}

import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <SignUp appearance={{ variables: { colorPrimary: "#0F172A" } }} />
        </div>
    )
}