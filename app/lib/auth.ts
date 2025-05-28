import { FirestoreAdapter } from "@auth/firebase-adapter";
import NextAuth, { type DefaultSession } from "next-auth";
import { db, firebaseCert } from "./firebase";
import GoogleProvider from "next-auth/providers/google";
import { Timestamp } from "firebase-admin/firestore";
import { TRIAL_DAYS } from "./config";

declare module "next-auth" {
  interface Session {
    user: {
      createdAt: number;
      isTrial: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    createdAt: number;
    isTrial?: boolean;
    isSubscribed?: boolean;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: FirestoreAdapter({
    credential: firebaseCert
  }),
  providers: [GoogleProvider],
  events: {
    createUser: async ({ user }: { user: any }) => {
      if (!user.id) return;

      await db.collection("users").doc(user.id).update({
        createdAt: Timestamp.now().toMillis(),
      });
    },
  },
  callbacks: {
    session({ session, user }: { session: any; user: any }) {
      return {
        ...session,
        user: {
          ...session.user,
          isTrial: 
            user.createdAt > 
              Date.now() - 1000 * 60 * 60 * 24 * TRIAL_DAYS || false,
          createdAt: user.createdAt,
        }
      }
    }
  },
})