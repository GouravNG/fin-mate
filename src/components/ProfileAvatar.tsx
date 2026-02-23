import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const ProfileAvatar = (data: { avatar: string | undefined; usernameShortForm: string }) => {
  return (
    <Avatar className="m-auto sm:m-2 hidden sm:block" size="lg">
      <AvatarImage src={data.avatar} />
      <AvatarFallback className="border">{data.usernameShortForm}</AvatarFallback>
    </Avatar>
  )
}
export default ProfileAvatar
