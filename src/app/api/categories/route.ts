import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
  } catch (err) {
    console.error(err);
    return Error("DB接続に失敗しました");
  } finally {
  }
}

// 記事一覧取得
export const GET = async () => {
  try {
    await connect();
    const categories = await prisma.category.findMany();
    return NextResponse.json(
      { message: "success", categories },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
