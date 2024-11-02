"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Lock, Users, Vote } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-800/80 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-gray-800/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Vote className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">BlockVote</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/voting-room" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Voting Room
            </Link>
            <Link href="/register-candidate" className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Register as Candidate
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                  Secure Voting on the Blockchain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Cast your vote with confidence. Our platform leverages blockchain technology to ensure transparency and security in every election.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <Link href="/voting-room">Enter Voting Room</Link>
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900" asChild>
                  <Link href="/register-candidate">Register as Candidate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">About Us</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300 text-center">
              BlockVote is a cutting-edge voting platform built on blockchain technology. We&apos;re committed to revolutionizing the voting process by making it more secure, transparent, and accessible to all.
            </p>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                    <Lock className="h-6 w-6" />
                    <span>Blockchain Security</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Leverage the power of blockchain to ensure vote integrity and prevent tampering.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <CheckCircle className="h-6 w-6" />
                    <span>Transparent Voting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">All votes are recorded on the blockchain, allowing for full transparency and auditability.</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-indigo-200 dark:border-indigo-800">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
                    <Users className="h-6 w-6" />
                    <span>Easy Participation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">Simple interface for voters and candidates, making the democratic process more accessible.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Make Your Voice Heard?</h2>
              <p className="mx-auto max-w-[600px] text-purple-100 md:text-xl">
                Join BlockVote today and be part of the future of secure, blockchain-based voting.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-100" asChild>
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
              © 2024 BlockVote. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link href="/terms" className="text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm font-medium text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}