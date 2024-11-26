import Image from 'next/image'
import { logo } from '../../public/export'
import ModeToggle from './mode-toggle'
import LocaleSwitcher from './locale-switcher'
export default function Navbar() {
  return (
    <div className="justify-between border">
      <div>
        <Image src={logo} height={200} width={200} alt="logo exervet" className='dark:invert'></Image>
      </div>
      <ModeToggle />
      <LocaleSwitcher />
    </div>
  )
}
