import prismadb from '@/lib/db/prisma-db'
import React from 'react'

const HoroscopePage = async () => {
  const horoscope = await prismadb.horoscope.findMany()
  return (
    <div>HoroscopePage</div>
  )
}

export default HoroscopePage