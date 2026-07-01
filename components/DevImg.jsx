import Image from "next/image"

const DevImg = ({containerStyles, imgSrc, imgStyles = ""}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" className={imgStyles}/>
    </div>
  )
}

export default DevImg
