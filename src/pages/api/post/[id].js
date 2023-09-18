import prisma from "../../../lib/prisma"

export default async function handle(req, res) {
  const propId = req.query.id

  if (req.method === 'DELETE') {
    handleDELETE(propId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// DELETE /api/post/:id
async function handleDELETE(propertyId, res) {
  const prop = await prisma.property.delete({
    where: { id: Number(propertyId) },
  })
  res.json(prop)
}
