import { navigationData } from '@/components/data/navigation.data'

const databuilder = (pathname: string) => {
  const data = navigationData.find((nav) => nav.href === pathname)
  return { title: data!.title, description: data!.description }
}

export const getDyanamicHeader = (pathname: string) => {
  switch (pathname) {
    case '/app/cards':
      return databuilder(pathname)
    case '/app/wallet':
      return databuilder(pathname)
    case '/app/settings':
      return databuilder(pathname)
    default:
      return undefined
  }
}
