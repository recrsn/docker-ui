import React from 'react'
import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faCubes,
  faCompactDisc,
  faNetworkWired,
  faDatabase,
  faTachometerAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'

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
          <NavLink to="/containers">
            <Icon icon={faCubes} fixedWidth /> Containers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/images">
            <Icon icon={faCompactDisc} fixedWidth /> Images
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/volumes">
            <Icon icon={faDatabase} fixedWidth /> Volumes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/networks">
            <Icon icon={faNetworkWired} fixedWidth /> Networks
          </NavLink>
        </NavItem>
        <Separator />
        <NavItem>
          <NavLink to="/monitor">
            <Icon icon={faTachometerAlt} fixedWidth /> Monitor
          </NavLink>
        </NavItem>
        <Separator />
        <NavItem>
          <NavLink to="/preferences">
            <Icon icon={faCog} fixedWidth /> Preferences
          </NavLink>
        </NavItem>
      </NavList>
    </Wrapper>
  )
}
