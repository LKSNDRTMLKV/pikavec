import { DataTable } from '@/components/custom/data-table'
import prismadb from '@/lib/db/prisma-db'
import React from 'react'

const HoroscopePage = async () => {
  const horoscopes = await prismadb.horoscope.findMany()
  return (
    <div>
      {/* <DataTable searchKey='label' columns={columns} data={horoscopes} /> */}
    </div>
  )
}

export default HoroscopePage