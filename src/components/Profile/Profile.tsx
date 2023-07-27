import ProfilePhoto from '@/assets/profile.jpg';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Content, Photo, SocialMedia } from './Profile.styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Content>
        <Photo
          src={ProfilePhoto}
          alt="Bruno Pinela"
          width={120}
          height={120}
          priority
        />
        <h1>Bruno Pinela</h1>
        <span>Front End Engineer</span>

        <SocialMedia>
          <Link href="https://github.com/bpinela">
            <AiFillGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/bruno-pinela/">
            <AiFillLinkedin />
          </Link>
        </SocialMedia>
      </Content>
    </Container>
  );
};

export default Profile;
