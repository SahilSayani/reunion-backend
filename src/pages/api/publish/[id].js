import prisma from "../../../lib/prisma"

// PUT /api/publish/:id
export default async function handle(req, res) {
  const propertyId = req.query.id
  const prop = await prisma.property.update({
    where: { id: Number(propertyId) },
    data: { published: true },
  })
  res.json(prop)
}
