"use server"

import { Timestamp } from "firebase-admin/firestore"
import TotalVisits from "../components/commons/total-visits"
import { db } from "../lib/firebase"
import { auth } from "../lib/auth"

export async function createLink(link: string) {
  const session = await auth();

  if (!session?.user) return;

  try {
    await db.collection("profiles").doc(link).set({
      userId: session.user.id,
      TotalVisits: 0,
      createdAt: Timestamp.now().toMillis(),
    });

    return true;
  } catch (error) {
    return false;
  }
}