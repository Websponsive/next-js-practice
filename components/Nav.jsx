'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useRouter } from "next/navigation";

const Nav = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }
    setupProviders();
  }, [])

  return (
    <nav className="navbar nav-hidden">
        <Link href={"/"}>
          <Image 
            src="/assets/car-logo.png" 
            alt="our logo" 
            draggable="false" 
            width={150}
            height={50}
            className="navbar-logo" />
        </Link>
        <div className="navigation">
        {session?.user ? (
          <>
            <Link href="/new-post" className="accent-btn light small-text">New Post</Link>
            <button onClick={() => {
              signOut();
              router.push('/')
            }} className="outline-btn dark small-text hide-small">Log Out</button>
            <Link href="/profile">
              <Image src={session?.user.image}
              width={44}
              height={44}
              className="profile-pic"
              alt="profile"/>
            </Link>
          </>
        ) : (
          <>
            {providers && 
              Object.values(providers).map((provider) => (
                <button
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="accent-btn light small-text">
                Sign In
                </button>
              ))}
          </>
        )}
        </div>
    </nav>
  )
}

export default Nav