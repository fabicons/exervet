import Image from 'next/image'
import { logo } from '../../public/export'
import ModeToggle from './mode-toggle'
export default function Navbar() {
  return (
    <div className="justify-between border">
      <div>
        <Image src={logo} height={200} width={200} alt="logo exervet"></Image>
      </div>
      <ModeToggle />
    </div>
  )
}
