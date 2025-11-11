"use client"
import { FC } from 'react'
import WelcomeStorySet from '@/assets/WelcomeStorySet'
import Link from 'next/link'
interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {

  return <div className="flex-center flex-col text-center min-h-[80vh] space-y-6">
  <h1 className="text-4xl md:text-6xl font-semibold text-foreground">
    Welcome to the <span className="text-primary">Users Dashboard</span>
  </h1>

  <WelcomeStorySet className="w-64 md:w-96 animate-fade-in" />

  <Link href={"/users"} className="btn btn-primary shadow-lg hover:shadow-primary/40">
    View Users
  </Link>
</div>

}

export default Hero