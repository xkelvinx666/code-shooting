import Link from 'next/link';
import SelectMaps from "./select-maps";
import UserName from "./user-name";

export default function Login() {
  return (
    <>
      <SelectMaps />
      <UserName />
      <Link href="/game">
        <a />
      </Link>
    </>
  );
}