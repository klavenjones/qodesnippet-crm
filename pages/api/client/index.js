import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { firstname, lastname, company, phone, email, title, notes, image } =
    req.body;
  const session = await getSession({ req });

  if (req.method === "POST") {
    if (session) {
      const result = await prisma.client.create({
        data: {
          firstName: firstname,
          lastName: lastname,
          title: title,
          notes: notes,
          company: company,
          phone: phone,
          email: email,
          image: image,
          user: { connect: { email: session?.user?.email } }
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } else {
    if (session) {
      const result = await prisma.client.findMany({
        where: {
          user: { email: session?.user?.email }
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          title: true,
          notes: true,
          company: true,
          phone: true,
          email: true,
          image: true
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }
}
