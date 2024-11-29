import { getQueryParamOrUndefined } from "@/utils/queryParams";
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
export const GET = async (request: Request) => {
  const categoryId = getQueryParamOrUndefined(request.url, "?categoryId=");
  try {
    await connect();
    const articles = await prisma.article.findMany({
      where:
        categoryId == undefined
          ? {}
          : {
              belong_categories: {
                some: {
                  id: categoryId,
                },
              },
            },
      include: {
        belong_categories: true,
      },
    });
    return NextResponse.json({ message: "success", articles }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
