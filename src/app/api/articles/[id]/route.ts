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
export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    await connect();
    const id = (await params).id;
    const article = await prisma.article.findFirst({
      where: {
        id: id,
      },
      include: {
        belong_categories: true,
      },
    });
    return NextResponse.json({ message: "success", article }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

// 記事投稿
export const POST = async (req: Request) => {
  try {
    const { name, icon } = await req.json();
    await connect();
    const article = await prisma.category.create({
      data: {
        name,
        icon,
      },
    });
    return NextResponse.json({ message: "success", article }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
