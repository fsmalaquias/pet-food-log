/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
export enum PetOptions {
  none = 'none',
  Dog = 'dog',
  Cat = 'cat'
}

export enum RouteNames {
  OnboardIngScreen = 'OnboardingScreen',
  LoggedInScreen = 'LoggedInScreen',
  PetChoose = 'PetChoose',
  PetInfo = 'PetInfo',
  PetHistory = 'PetHistory'
}

export function dateFormat(timestamp: number) {
  const dateObject = new Date(timestamp);
  const day = ('0' + dateObject.getDate()).slice(-2);
  const month = ('0' + (dateObject.getMonth() + 1)).slice(-2);
  const hour = ('0' + dateObject.getHours()).slice(-2);
  const min = ('0' + dateObject.getMinutes()).slice(-2);
  const sec = ('0' + dateObject.getSeconds()).slice(-2);
  return `${day}/${month} às ${hour}:${min}:${sec}`;
}
