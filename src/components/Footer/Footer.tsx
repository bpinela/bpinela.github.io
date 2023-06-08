import Link from 'next/link';
import { Container, Content } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <span>
          © 2023{' '}
          <Link href="https://creativecommons.org/licenses/by-nc/4.0/">
            CC BY-NC 4.0
          </Link>
        </span>
      </Content>
    </Container>
  );
};

export default Footer;
