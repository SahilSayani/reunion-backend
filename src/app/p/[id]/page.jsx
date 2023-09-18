import React from 'react'
import { notFound, } from 'next/navigation'
import prisma from '../../../lib/prisma'
import PostDetails from '../../../components/PostDetails'

export default async function Post({ params }) {
  const id = Number(
    Array.isArray(params?.id)
      ? params?.id[ 0 ]
      : params?.id,
  )
  const prop = await prisma.property.findUnique({
    where: { id },
    include: { author: true },
  })

  if (!prop) notFound()

  return (
    <PostDetails {...prop} />
  )
}


