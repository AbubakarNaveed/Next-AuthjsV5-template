import { signOut, signIn } from "auth";

//"use server is necessary for server-side rendering"
export const triggerSignOut = async () => {
  "use server";
  await signOut();
};

export const triggerSignIn = async () => {
  "use server";
  await signIn();
};
