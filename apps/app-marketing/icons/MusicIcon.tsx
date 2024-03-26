import {IconPropsInterface} from "@/interfaces/IconProps";

const MusicIcon = ({ width = '40', height = '40' }: IconPropsInterface) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="M40 0H0V40H40V0Z" fill="url(#pattern_music)" />
      <defs>
        <pattern id="pattern_music" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_44_288" transform="scale(0.0138889)" />
        </pattern>
        <image
          id="image0_44_288"
          width="72"
          height="72"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

export default MusicIcon
