"use client";
import { useParams } from "next/navigation";
export default function Page() {
  const { id } = useParams();
  return (
    <div>
      <h1>Question</h1>
    </div>
  );
}
