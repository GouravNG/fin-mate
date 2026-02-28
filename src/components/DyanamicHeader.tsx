import type { TDynamicHeader } from '@/types'
import { ChevronLeft } from 'lucide-react'
import { Button } from './ui/button'
import { useIsMobile } from '@/hooks/use-mobile'

const DyanamicHeader: React.FC<TDynamicHeader> = ({
  backFn,
  title,
  description,
  utilityFn,
  children,
  ...prop
}) => {
  const isMobile = useIsMobile()
  return (
    <div className="flex items-center">
      <div className="sm:hidden ">
        <Button size={'icon'} variant={'ghost'} onClick={backFn} aria-label="Go back">
          <ChevronLeft />
        </Button>
      </div>
      <div className="m-auto sm:m-0">
        <h2 className="font-heading sm:text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground hidden sm:block text-sm">{description}</p>
      </div>
      <div className="sm:ml-auto">
        {isMobile
          ? prop.utilityIcon && (
              <Button size={'icon'} variant={'ghost'} onClick={utilityFn} aria-label="utility">
                <prop.utilityIcon />
              </Button>
            )
          : children}
      </div>
    </div>
  )
}
export default DyanamicHeader
