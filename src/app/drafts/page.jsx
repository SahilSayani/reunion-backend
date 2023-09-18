import React from 'react'
import Property from '../../components/Property'
import prisma from '../../lib/prisma'
import styles from '../../styles/Drafts.module.css'

const Drafts = async () => {
  const drafts = await prisma.property.findMany({
    where: { published: false },
    include: { author: true },
  })
  return (
    <>
      <div>
        <h1>Drafts</h1>
        <main>
          {drafts.map((prop) => (
            <div key={prop.id} className={styles.post}>
              <Property property={prop} />
            </div>
          ))}
        </main>
      </div>
    </>
  )
}

export default Drafts
