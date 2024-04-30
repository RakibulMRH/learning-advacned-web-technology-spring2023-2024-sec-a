import Image from "next/image"; 
export default function Home() {
  return (
    <>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
    </>
  );
}
