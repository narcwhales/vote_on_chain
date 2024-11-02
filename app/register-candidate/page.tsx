'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { toast } from "@/components/ui/use-toast"
import {toast} from "@/hooks/use-toast"
import { Loader2, ArrowLeft } from "lucide-react"

export default function RegisterCandidate() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Registration Submitted",
        description: "Your candidate registration has been submitted for review.",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Register as a Candidate</CardTitle>
          <CardDescription className="text-center">Complete the form below to register as a candidate for the upcoming election.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="johndoe@example.com" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partyAffiliation">Party Affiliation</Label>
              <Input id="partyAffiliation" placeholder="Independent" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="platform">Election Platform</Label>
              <Textarea 
                id="platform" 
                placeholder="Describe your key policies and vision..." 
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience</Label>
              <Textarea 
                id="experience" 
                placeholder="List your qualifications and experience..." 
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="walletAddress">Blockchain Wallet Address</Label>
              <Input id="walletAddress" placeholder="0x..." required />
            </div>
            <CardFooter className="flex justify-between px-0">
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </>
                ) : (
                  'Submit Registration'
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      <Button variant="link" className="mt-4 text-purple-600 dark:text-purple-400" asChild>
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}