//Media BreakPoints
export enum MediaBP {
  MobileXs = '@media screen and (min-width: 320px)',
  MobilePortrait = '@media screen and (min-width: 360px)',
  MediaWeb = '@media screen and (min-width: 425px)',
  MobileLandscape = '@media screen and (min-width: 640px)',
  TabletPortrait = '@media screen and (min-width: 768px)',
  TabletPortraitMaxWidth = '@media screen and (max-width: 768px)',
  TabletLandscape = '@media screen and (min-width: 1024px)',

  MediaXsMaxWidth = '@media screen and (max-width: 328px)',
  MediaSm = '@media screen and (min-width: 600px)',
  MediaMd = '@media screen and (min-width: 900px)',
  MediaMdMaxWidth = '@media screen and (max-width: 900px)',
  MediaSmMaxWidth = '@media screen and (max-width: 600px)',
  MediaMaxWidth480 = '@media screen and (max-width: 480px)',
  MediaLg = '@media screen and (min-width: 1200px)',
  MediaLgCommon = '@media screen and (min-width: 1366px)',
  MediaXl = '@media screen and (min-width: 1800px)',

  LgDesktop = '@media screen and (min-width: 1920px)',
  Media400 = '@media screen and (min-width: 400px)',

  MediaScreenSmMax = '@media screen and (max-width: 599px)',
  MediaScreenLgMaxPortrait = '@media screen and (max-width: 1199px) and (orientation: portrait)'
}
