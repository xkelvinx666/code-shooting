import Map from '../constants/environment/map';

export default function getMapConfig(): {[key: number]: Array<string>}{
  return {
    [Map.DIRT]: [
      '/assets/environment/maps/game_background_1.png',
    ],
    [Map.SAND]: [
      '/assets/environment/maps/game_background_2.png',
    ],
    [Map.GRASS]: [
      '/assets/environment/maps/game_background_3.png',
    ],
    [Map.WOOD]: [
      '/assets/environment/maps/game_background_4.png',
    ]
  };
};