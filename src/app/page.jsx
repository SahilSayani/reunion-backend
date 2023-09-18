import prisma from "../lib/prisma"
import Property from "../components/Property"

export default async function Home() {
  const feed = await prisma.property.findMany({
    where: { published: true },
    include: { author: true },
  })
  return (
    <>
      {feed.map((prop) => (
        <div key={prop.id}>
          <Property property={prop} />
        </div>
      ))}
    </>
  )
}
