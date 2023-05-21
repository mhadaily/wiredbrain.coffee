import { getValue } from 'firebase/remote-config';
import { isRemoteConfigActivated, remoteConfig } from './firebase';

export async function getFavoriteCoffee() {
  if (await isRemoteConfigActivated) {
    return getValue(remoteConfig, 'favoriteCoffee');
  }
}
