import { cn } from '@/lib/utils'

interface LakeProps {
  className: string
  path: string
  transform?: string
}

export default function Blob({ className, path, transform = 'translate(100 100)' }: LakeProps) {
  return (
    <svg className={cn('absolute', className)} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d={path} transform={transform} />
    </svg>
  )
}
