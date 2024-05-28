"use server";

import { db } from "@/db"; // db.ts からインポート
import { OrderStatus } from "@prisma/client";

export const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  try {
    await db.order.update({
      where: { id },
      data: { status: newStatus },
    });
  } catch (error) {
    console.error("Failed to update order status:", error);
    throw error;
  }
};
