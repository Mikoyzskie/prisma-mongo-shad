import prisma from "@/lib/db/prisma";
import { createCategorySchema } from "@/lib/validation/categories";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parseResult = createCategorySchema.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error);
      return Response.json({ error: "Invalid input" }, { status: 400 });
    }

    const { name, description } = parseResult.data;

    const job = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    return Response.json({ job }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
