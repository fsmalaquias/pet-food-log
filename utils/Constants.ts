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
  return `${dateObject.getDate()}/${dateObject.getMonth()} às ${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
}
