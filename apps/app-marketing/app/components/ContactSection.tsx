import { ContactInfo } from '@/interfaces/Footer'
export const ContactSection = ({ ContactInfoData }: { ContactInfoData: ContactInfo[] }) => {
  return (
    <div>
      <div className="mt-5 flex  flex-col gap-7 p-2  md:gap-10">
        {ContactInfoData?.map((data, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              {data.icon}
              <p>{data.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
