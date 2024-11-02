'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

interface LiskContextType {
  connected: boolean
  address: string | null
  isLoading: boolean
  error: string | null
  connect: () => Promise<void>
  disconnect: () => void
}

const LiskContext = createContext<LiskContextType>({
  connected: false,
  address: null,
  isLoading: false,
  error: null,
  connect: async () => {},
  disconnect: () => {},
})

export function LiskProvider({ children }: { children: React.ReactNode }) {
  const [connected, setConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [liskClient, setLiskClient] = useState<any>(null)

  useEffect(() => {
    // Dynamically import Lisk client only on client side
    const loadLiskClient = async () => {
      try {
        const { default: client } = await import('@liskhq/lisk-client')
        setLiskClient(client)
      } catch (err) {
        console.error('Failed to load Lisk client:', err)
        setError('Failed to initialize Lisk client')
      }
    }
    loadLiskClient()
  }, [])

  const connect = async () => {
    if (!liskClient) {
      setError('Lisk client not initialized')
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      
      const client = await liskClient.apiClient.createWSClient('wss://testnet.lisk.com/ws')
      const tempAddress = 'lsk...' // Replace with actual wallet connection
      
      setAddress(tempAddress)
      setConnected(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to connect')
      console.error('Failed to connect:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const disconnect = () => {
    setAddress(null)
    setConnected(false)
  }

  return (
    <LiskContext.Provider value={{ 
      connected, 
      address, 
      isLoading, 
      error, 
      connect, 
      disconnect 
    }}>
      {children}
    </LiskContext.Provider>
  )
}

export const useLisk = () => useContext(LiskContext)