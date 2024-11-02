'use client'

import { Button } from './ui/button'
import { useLisk } from '@/providers/lisk-provider'

export function LiskConnect() {
  const { connected, address, connect, disconnect } = useLisk()

  if (!connected) {
    return (
      <Button onClick={connect}>
        Connect Lisk Wallet
      </Button>
    )
  }

  return (
    <Button onClick={disconnect}>
      {address?.slice(0, 6)}...{address?.slice(-4)}
    </Button>
  )
} 