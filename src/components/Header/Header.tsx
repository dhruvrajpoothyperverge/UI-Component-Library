import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Logo from "../Logo/Logo";
import NotificationIcon from "../NotificationIcon/NotificationIcon";

interface HeaderProps {
  profilePic: string;
  showBadge?: boolean;
  fallback?: string;
}

const Header: React.FC<HeaderProps> = ({ profilePic, showBadge, fallback }) => {
  return (
    <div className="flex justify-between items-center p-6">
      <ProfileIcon profilePic={profilePic} fallback={fallback} />
      <Logo />
      <NotificationIcon showBadge={showBadge || false} />
    </div>
  );
};

export default Header;
