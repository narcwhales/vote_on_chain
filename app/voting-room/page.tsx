'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import { Loader2, ArrowLeft, User } from "lucide-react"

// Mock candidate data
const candidates = [
  { id: 1, name: "Alice Johnson", party: "Progressive Party" },
  { id: 2, name: "Bob Smith", party: "Conservative Alliance" },
  { id: 3, name: "Carol Williams", party: "Centrist Union" },
  { id: 4, name: "David Brown", party: "Green Future" },
]

export default function VotingPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null)
  const [isVoting, setIsVoting] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selectedCandidate) {
      toast({
        title: "No candidate selected",
        description: "Please select a candidate before submitting your vote.",
        variant: "destructive",
      })
      return
    }
    setIsVoting(true)

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsVoting(false)
      toast({
        title: "Vote Submitted",
        description: "Your vote has been securely recorded on the blockchain.",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Cast Your Vote</CardTitle>
          <CardDescription className="text-center">Select your preferred candidate for the current election.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-6">
            <RadioGroup onValueChange={setSelectedCandidate} className="space-y-4">
              {candidates.map((candidate) => (
                <div key={candidate.id} className="flex items-center space-x-2 rounded-lg border p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <RadioGroupItem value={candidate.id.toString()} id={`candidate-${candidate.id}`} className="border-purple-600 text-purple-600" />
                  <Label htmlFor={`candidate-${candidate.id}`} className="flex-grow cursor-pointer">
                    <div className="font-medium">{candidate.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{candidate.party}</div>
                  </Label>
                  <User className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </RadioGroup>
            <CardFooter className="flex justify-between px-0">
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white" disabled={isVoting || !selectedCandidate}>
                {isVoting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Recording Vote...
                  </>
                ) : (
                  'Submit Vote'
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