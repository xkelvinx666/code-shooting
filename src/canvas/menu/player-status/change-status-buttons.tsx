import { useAppDispatch } from '../../../utils/hooks/redux';
import { setPlayerStatus } from '../../../utils/store/player';
import ImageButton from '../image-button';
import Status from '../../../constants/characters/status';

export default function ChangeStatusButtons() {
  const dispatch = useAppDispatch();
  const handleClick = (status: Status) => {
    dispatch(setPlayerStatus(status));
  };
  return (
    <>
      <ImageButton x={20} y={100} height={50} width={50} image="/assets/menu/stand.png" onClick={() => handleClick(Status.READY)} />
      <ImageButton x={20} y={200} height={50} width={50} image="/assets/menu/walk.png" onClick={() => handleClick(Status.WALK)} />
      <ImageButton x={20} y={300} height={50} width={50} image="/assets/menu/win.png" onClick={() => handleClick(Status.WIN)} />
    </>
  );
}
