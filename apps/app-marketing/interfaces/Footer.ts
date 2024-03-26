export interface ContactInfo {
  icon: JSX.Element
  text: string
}

export interface SocialInfo {
  icon: JSX.Element | string
  link: string
}

export interface SocialSectonProps {
  SocialList: SocialInfo[]
  storesDownload: SocialInfo[]
}
