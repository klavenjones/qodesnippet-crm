import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { id } = req.query;

  const session = await getSession({ req });

  if (req.method === "GET") {
    if (session) {
      const result = await prisma.client.findUnique({
        where: {
          id: Number(id)
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }

  if (req.method === "DELETE") {
    if (session) {
      const result = await prisma.client.delete({
        where: {
          id: Number(id)
        }
      });

      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }

  if (req.method === "PUT") {
    if (session) {
      const { firstName, lastName, company, phone, email } = req.body;
      const result = await prisma.client.update({
        where: {
          id: Number(id)
        },
        data: {
          firstName: firstName,
          lastName: lastName,
          company: company,
          phone: phone,
          email: email
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }
}
