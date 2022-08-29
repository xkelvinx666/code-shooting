import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {setMap} from '../../utils/store/map';
import { useAppDispatch } from '../../utils/hooks/redux';
import {setPlayerJob, setPlayerName} from '../../utils/store/player';
import Map from '../../constants/environment/map';
import Job from '../../constants/characters/job';
import SelectOptions from './select-options';

export default function Login() {
  const [selectedMap, setSelectedMap] = useState<Map>(Map.DIRT);
  const [characterJob, setCharacterJob] = useState<Job>(Job.ADVENTURER);
  const [userName, setUserName] = useState<string>('');
  const t = useTranslations();
  const mapOptions = Object.values(Map);
  const jobOptions = Object.values(Job);
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(setPlayerName(userName));
    dispatch(setPlayerJob(characterJob));
    dispatch(setMap(selectedMap));
  };

  return (
    <>
      <div className="fixed h-screen w-screen z-0">
        <Image src="/assets/environment/login/login-background.png" layout={'fill'} alt="background" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow z-10 bg-white p-4 rounded-l max-w-2xl">
        <SelectOptions<Map> name={t('map')} active={selectedMap} options={mapOptions} onClick={(val) => setSelectedMap(val)} />
        <SelectOptions<Job> name={t('job')} active={characterJob} options={jobOptions} onClick={(val) => setCharacterJob(val)} />
        <span className="text-lg font-semibold">{t('name')}</span>
        <div className="mx-10 mb-4 mt-1">
          <input className="block px-3 py-1 bg-gray-100 w-full max-w-2xl mx-auto text-stone-500" value={userName} onChange={(event) => setUserName(event.target.value)}/>
        </div>
        <Link href="/game">
          <a className="block mx-auto bg-blue-400 text-white text-center h-10 leading-10 w-40" onClick={handleLinkClick}>{t('enter')}</a>
        </Link>
      </div>
    </>
  );
}