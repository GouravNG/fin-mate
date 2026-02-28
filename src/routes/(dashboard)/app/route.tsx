import DyanamicHeader from '@/components/DyanamicHeader'
import Navigation from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { getDyanamicHeader } from '@/utils/getDyanamicHeaderName'
import { Outlet, createFileRoute, useLocation, useRouter } from '@tanstack/react-router'
import { PlusIcon, Search } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/(dashboard)/app')({
  component: AuthLayout,
})

function AuthLayout() {
  const { pathname } = useLocation()
  const router = useRouter()
  const { t } = useTranslation()
  const headerDetails = getDyanamicHeader(pathname)
  return (
    <div className="h-screen overflow-x-hidden sm:ml-20">
      <div className="flex flex-col-reverse sm:flex-row">
        <Navigation />
        <div className="w-full p-2">
          {pathname !== '/app/dashboard' && headerDetails && (
            <DyanamicHeader
              title={t(headerDetails.title)}
              description={t(headerDetails.description)}
              backFn={() => router.history.back()}
              utilityIcon={Search}
              utilityFn={(e) => console.log('user clicked utility button', e.detail)}
            >
              <Button>
                <PlusIcon />
                Add New Account
              </Button>
            </DyanamicHeader>
          )}
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
