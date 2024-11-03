import { SportNameId } from '@enums/index';

type NavLink = '/' | '/basketball' | '/tenis' | '/hokey' | '/valleyball' | '/handball';

export const ACTIVE_TABS: Record<SportNameId, NavLink> = {
  basketball: '/basketball',
  tenis: '/tenis',
  hokey: '/hokey',
  volleyball: '/valleyball',
  handball: '/handball',
  football: '/',
};
