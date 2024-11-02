'use client'

import { useLisk } from '@/providers/lisk-provider'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { LiskConnect } from './lisk-connect'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { connected } = useLisk()

  if (!connected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex flex-col items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Connect Your Lisk Wallet</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <LiskConnect />
          </CardContent>
        </Card>
      </div>
    )
  }

  return children
} 