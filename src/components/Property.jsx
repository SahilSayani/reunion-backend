'use client'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Post.module.css'
import Link from 'next/link'

const Property = ({ property }) => {

  const authorName = property.author ? property.author.name : 'Unknown Lister'
  return (
    <Link
      href={`/p/${property.id}`}
      className={styles.post}
    >
      <h2>{property.title}</h2>
      <small>owned By {authorName}</small>
      <ReactMarkdown>{property.content}</ReactMarkdown>
    </Link>
  )
}

export default Property
