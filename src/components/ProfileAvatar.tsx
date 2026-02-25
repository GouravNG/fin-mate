import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const ProfileAvatar = (data: { avatar: string | undefined; usernameShortForm: string }) => {
  return (
    <Avatar className="m-auto sm:m-2 hidden sm:block" size="lg" data-testid="profile-avatar">
      <AvatarImage
        src={data.avatar}
        alt={'profile avatar image'}
        data-testid="profile-avatar-img-src"
      />
      <AvatarFallback className="border" data-testid="profile-avatar-fallback-text">
        {data.usernameShortForm}
      </AvatarFallback>
    </Avatar>
  )
}
export default ProfileAvatar
