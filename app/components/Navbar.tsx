import React from 'react'
import Link from "next/link";
import {auth, signIn, signOut} from "@/auth";
import Image from "next/image";
const Navbar = async () => {

    const session = await auth();

    return (
        <header className={`fixed w-full px-5 py-3 bg-white shadow-sm font-work-sans`}>
            <nav className={`flex justify-between items-center`}>
                <Link href={`/`}>
                    <Image src="/logo.png" alt="logo" width={90} height={40} className={`cursor-pointer`}/>
                </Link>

                <div className={`flex items-center gap-5 text-black`}>

                    {session && session?.user ? (
                        <>
                            <Link href={`/startup/create`}>
                                <span>CREATE</span>
                            </Link>

                            <form action={async ()=>{
                                "use server";
                                await signOut({
                                        redirectTo: "/"
                                })
                            }}>
                                <button type={"submit"}>
                                    <span>LOGOUT</span>
                                </button>
                            </form>

                            <Link href={`/user/${session?.user.id}`}>
                                <span>{session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                            <form action={async ()=>{
                                "use server";
                                await signIn('github')
                            }}>
                                <button type={"submit"}>
                                    <span>LOGIN</span>
                                </button>
                            </form>
                    )}

                </div>

            </nav>
        </header>
    )
}

export default Navbar
