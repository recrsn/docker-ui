import React from 'react'
import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

const Wrapper = styled.aside`
  background: #444;
  min-width: 225px;
  padding-top: var(--header-height);
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`

const NavItem = (props: any) => <li {...props} />

const Separator = styled(NavItem)`
  padding: 1rem 2rem;
`

const NavLink = styled(RouterNavLink).attrs(() => ({
  activeClassName: 'active'
}))`
  color: inherit;
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;

  &.active {
    background: rgba(255, 255, 255, 0.1);
  }
`

export default function Sidebar() {
  return (
    <Wrapper>
      <NavList>
        <NavItem>
          <NavLink to="/containers">Containers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/images">Images</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/volumes">Volumes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/networks">Networks</NavLink>
        </NavItem>
        <Separator />
        <NavItem>
          <NavLink to="/monitor">Monitor</NavLink>
        </NavItem>
        <Separator />
        <NavItem>
          <NavLink to="/preferences">Preferences</NavLink>
        </NavItem>
      </NavList>
    </Wrapper>
  )
}
