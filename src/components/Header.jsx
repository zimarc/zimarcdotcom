import styled from 'react-emotion';

const Header = styled.div`
  background: ${props => props.theme.brand.secondary};
  color: #ff4444;
  margin-bottom: 2rem;
  padding: 2rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  h1 {
    margin-bottom: 0;
  }
`;

export default Header;
