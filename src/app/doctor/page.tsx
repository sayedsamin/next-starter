import Image from "next/image";
import Link from "next/link";
import DoctorList from "./DoctorList";

export default function Doctor() {
  return (
    // Center the content
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Header */}
      <div>
        <h1>I am the Doctor Page</h1>
        <Link href="/"> Go back to home </Link>

        <DoctorList />
      </div>
    </div>
  );
}
