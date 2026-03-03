import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function GET() {
  try {
    const snapshot = await db.collection("promoters").get();

    const promoters = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(promoters);
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener promotores" },
      { status: 500 }
    );
  }
}