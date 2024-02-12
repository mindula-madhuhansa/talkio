"use client";

import { auth } from "@/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

async function syncFirebaseAuth(session: Session) {
  if (session && session.firenaseToken) {
    try {
      await signInWithCustomToken(auth, session.firenaseToken);
    } catch (error) {
      console.log("Error signing in with custom token: ", error);
    }
  } else {
    auth.signOut();
  }
}

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);
  return <>{children}</>;
}

export default FirebaseAuthProvider;
