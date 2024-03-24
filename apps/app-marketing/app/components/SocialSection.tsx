import Image from 'next/image'
import Link from 'next/link'
import { SocialSectonProps } from '@/interfaces/Footer'

export const SocialSection = ({ SocialList, storesDownload }: SocialSectonProps) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-10 md:items-end ">
        <div className="flex  gap-4">
          {storesDownload?.map((store, index: number) => {
            return (
              <Link key={index} href={store.link} target="_black">
                <Image  src={store.icon as string} alt="store"  />
              </Link>
            )
          })}
        </div>

        <div className="flex  gap-10">
          {SocialList.map((data, index) => {
            return (
              <Link href={data.link} key={index} target="_black">
                { data.icon}
              </Link>
            )
          })}
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="underline">
            <p>Terms & Conditions</p>
          </Link>
          <Link href="/privacy" className="underline">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
