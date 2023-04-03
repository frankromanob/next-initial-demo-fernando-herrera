import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'


export const Navbar = () => {

  const menuItems = [
    {
      text: 'Home',
      href: '/'
    },
    {
      text: 'About',
      href: '/about'
    },
    {
      text: 'Contact',
      href: '/contact'
    },
    {
      text: 'Pricing',
      href: '/pricing'
    },
  ];


  // const theMenu=menuItems.map((menuItem) =>
  //     <ActiveLink key={menuItem.href} text={menuItem.text} href={menuItem.href} />
  // )

  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map((menuItem) =>
          <ActiveLink key={menuItem.href} text={menuItem.text} href={menuItem.href} />
        )
      }
    </nav>
  )
}
