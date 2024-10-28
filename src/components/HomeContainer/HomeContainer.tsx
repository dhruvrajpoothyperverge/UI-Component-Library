import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

interface Path {
  icon: ReactNode;
  label?: string;
  url: string;
}

interface HomeContainerProps {
  profilePic: string;
  showBadge?: boolean;
  fallback?: string;
  children?: ReactNode;
  navbarData: Path[];
}

const HomeContainer: React.FC<HomeContainerProps> = ({
  profilePic,
  showBadge,
  fallback,
  navbarData,
  children,
}) => {
  return (
    <div>
      <Header
        profilePic={profilePic}
        showBadge={showBadge}
        fallback={fallback}
      />

      {children}

      <Navbar data={navbarData} />
    </div>
  );
};

export default HomeContainer;
