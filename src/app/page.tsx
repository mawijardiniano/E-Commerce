// src/app/pages/page.tsx
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Link href="/authentication/login">
        <button className="bg-blue-500 text-white p-2 mt-4 rounded">Go to Page 2</button>
      </Link>
    </div>
  );
}
