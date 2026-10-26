'use client'

// Icons
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiWhatsappFill,
} from "react-icons/ri"

import Link from "next/link"

const icons = [
  {
    path: "https://github.com/mf-fatima/",
    name: <RiGithubFill/>,
    label: "GitHub",
  },
  {
    path: "https://www.linkedin.com/in/maryam-fatima-472037325/",
    name: <RiLinkedinFill/>,
    label: "LinkedIn",
  },
  {
    path: "mailto:maryamasjad033@gmail.com",
    name: <RiMailFill/>,
    label: "Email",
  },
  {
    path: "/contact",
    name: <RiWhatsappFill/>,
    label: "Contact",
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        const isExternal = icon.path.startsWith("http") || icon.path.startsWith("mailto")

        return <Link target={isExternal ? "_blank" : undefined} href={icon.path} key={index} aria-label={icon.label}>
        <div className={`${iconsStyles} pt-0 pb-10`}  >{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials
