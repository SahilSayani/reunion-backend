import prisma from "../../../lib/prisma"

// POST /api/post
// Required fields in body: title, authorEmail

// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content, authorEmail } = req.body
  const result = await prisma.property.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: authorEmail } },
      published: true
    },
  })
  res.json(result)
}
