import CountDown from '@/components/layout/CountDown'
import RecentWinners from '@/components/layout/RecentWinners'
import TournamentsBanner from '@/components/layout/TournamentsBanner'
import React from 'react'

const page = () => {
  return (
    <>
      <TournamentsBanner/>
      <CountDown/>
      <RecentWinners/>
    </>
  )
}

export default page
