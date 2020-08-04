import React, {Component} from 'react'
import styles from '../Contacts/Contacts.module.css'
import vksociallogotype from '../Contacts/images/vksociallogotype.svg'
import facebooklogobutton from '../Contacts/images/facebooklogobutton.svg'
import githublogo from '../Contacts/images/githublogo.svg'
import arroba from '../Contacts/images/arroba.svg'
import linkedin from '../Contacts/images/linkedin.svg'

const Contacts = () => (< div className = {styles.wrapper}>
  <a  href="mailto:Kasmasha07@gmail.com" target="_blank"> <img src = {arroba} /> Kasmasha07@gmail.com</a>
  <ul className = {styles.socials}>
  <li><a href='https://vk.com/id5458498' target="_blank"><img src = {vksociallogotype} /></a></li>
  
  <li><a href='https://www.facebook.com/maria.kasatkina.52' target="_blank"><img src = {facebooklogobutton} /></a></li>
  
  <li><a href='https://github.com/MariaKasa' target="_blank"><img src = {githublogo} /></a></li>
   <li><a href='https://www.linkedin.com/in/maria-kasatkina-b1699b1b2/' target="_blank"><img src = {linkedin} /></a></li>

  </ul></div>)
export default Contacts