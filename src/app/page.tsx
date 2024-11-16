'use client'
import { useRouter } from "next/navigation";

export interface user {
  name : string,
  email : string,
  tel : string,
  role : string,
  password : string,
  createdAt? : string
}
export default function Home() {
    const router = useRouter()
    router.push('/main')

    return (
    <main className='text-black'>

    </main>
  );
}
