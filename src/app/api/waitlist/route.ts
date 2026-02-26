import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const members = await prisma.waitlist.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json({ members });
  } catch (error) {
    console.error("Error fetching waitlist:", error);
    return Response.json(
      { error: "Failed to fetch waitlist" },
      { status: 500 }
    );
  }
}
