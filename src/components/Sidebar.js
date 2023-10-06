import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/Piyush%20Dutta.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1,
                duration: 0.5,
                type: 'spring'
            }
        }
    }


    return ( <
        motion.div className = "sidebar"
        variants = { sidebar_variant }
        initial = 'hidden'
        animate = "visible"

        >
        <
        img src = { mightycoder }
        alt = "avatar"
        className = "sidebar__avatar" / >
        <
        div className = "sidebar__name" > Piyush < span > Dutta < /span> </div >
        <
        div className = "sidebar__item sidebar__title" > Web Developer < /div> <
        a href = { resume }
        download = "Piyush%20Dutta.pdf" >
        <
        div className = "sidebar__item sidebar__resume" >
        <
        img src = { tie }
        alt = "resume"
        className = "sidebar__icon" / > Download Resume <
        /div> < /
        a > <
        figure className = "sidebar__social-icons my-2" >
        <
        a href = "!#" > < img src = { facebook }
        alt = "facebook"
        className = "sidebar__icon mr-3" / > < /a> <
        a href = "!#" > < img src = { instagram }
        alt = "instagram"
        className = "sidebar__icon" / > < /a> < /
        figure > <
        div className = "sidebar__contact" >
        <
        div className = "sidebar__item sidebar__github" >
        <
        a href = "!#" > < img src = { github }
        alt = "github"
        className = "sidebar__icon mr-3" / > github < /a> < /
        div > <
        div className = "sidebar__location" >
        <
        img src = { pin }
        alt = "location"
        className = "sidebar__icon mr-3" / >
        Kolkata, India < /div> <
        div className = "sidebar__item" > iampiyushdutta @gmail.com < /div> <
        div className = "sidebar__item" > 8340172667 < /div> < /
        div > <
        div className = "sidebar__item sidebar__email"
        onClick = { handleEmailMe } > email me < /div> < /
        motion.div >
    )
}

export default Sidebar;