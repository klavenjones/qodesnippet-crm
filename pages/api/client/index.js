import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { firstName, lastName, company, phone, email } = req.body;
  const session = await getSession({ req });

  if (req.method === "POST") {
    if (session) {
      const result = await prisma.client.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          company: company,
          phone: phone,
          email: email,
          user: { connect: { email: session?.user?.email } }
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  } else {
    // if (session) {
    const result = await prisma.client.findMany({
      where: {
        user: { email: session?.user?.email }
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        company: true,
        phone: true,
        email: true
      }
    });
    res.json(result);
    // } else {
    //   res.status(401).send({ message: "Unauthorized" });
    // }
  }
}
