import NewPostForm from "@/components/NewPostForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
  return (
    <main className="max-w-4xl mx-auto my-5">
      <NewPostForm />
    </main>
  );
  } else {

  return (
  <h1 className="font-bold text-3xl text-center mt-10">Login and start blogging!</h1>
  )
  }
}
