import { useRouter } from 'next/router';
import React from 'react';
import * as Styled from './index.styled';

type TabProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

type NavbarProps = {
  tabs: TabProps[];
};

const Navbar: React.FC<NavbarProps> = ({ tabs }) => {
  const { asPath } = useRouter();
  const activeTab = tabs.find(tab => asPath.startsWith(tab.value));

  return (
    <Styled.Navbar>
      <Styled.NavbarContent>
        <Styled.NavTabs value={activeTab?.value}>
          {tabs.map(tab => (
            <Styled.NavTab key={tab.value} icon={tab.icon} value={tab.value} label={tab.label} />
          ))}
        </Styled.NavTabs>
      </Styled.NavbarContent>
    </Styled.Navbar>
  );
};

export default Navbar;
