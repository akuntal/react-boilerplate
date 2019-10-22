import styled from 'styled-components';

export const NavbarContainer = styled.div`
  background-color: #dddeee;
  padding: 10px 0;
`;

export const Navbar = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  flex: 1 1 auto;
  & > li {
    min-width: 80px;
  }
`;
