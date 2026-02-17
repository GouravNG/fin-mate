import { useRouter } from '@tanstack/react-router'
import { Button } from './ui/button'

type TSSOButton = {
  redirectURL: string
  name: string
} & React.ComponentProps<typeof Button>

export const SSOButton: React.FC<TSSOButton> = ({ name, redirectURL, ...props }) => {
  const { navigate } = useRouter()
  return (
    <Button onClick={() => navigate({ to: redirectURL })} {...props}>
      {name}
    </Button>
  )
}

export const SSOButtonGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-around gap-4 px-8">{children}</div>
}
