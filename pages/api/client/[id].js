import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { id } = req.query;

  const session = await getSession({ req });

  if (req.method === "GET") {
    if (session) {
      const result = await prisma.client.findUnique({
        where: {
          id: id
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
          id: id
        }
      });

      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }

  if (req.method === "PUT") {
    if (session) {
      const {
        firstName,
        lastName,
        title,
        notes,
        company,
        phone,
        email,
        image
      } = req.body;

      const result = await prisma.client.update({
        where: {
          id: id
        },
        data: {
          firstName: firstName,
          lastName: lastName,
          title: title,
          notes: notes,
          company: company,
          phone: phone,
          email: email,
          image: image
        }
      });
      res.json(result);
    } else {
      res.status(401).send({ message: "Unauthorized" });
    }
  }
}
