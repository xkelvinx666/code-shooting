import Link from 'next/link';
import Map from '../../constants/environment/map';
import { useState } from "react";
import SelectMaps from "./select-maps";
import UserName from "./user-name";

export default function Login() {
  const [userName, setUserName] = useState<string>('');
  const [selectedMap, setSelectedMap] = useState<Map>(Map.DIRT);
  return (
    <>
      <SelectMaps map={selectedMap} setMap={setSelectedMap} />
      <UserName />
      <Link href="/game">
        <a />
      </Link>
    </>
  );
}