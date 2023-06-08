import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Content, Photo, SocialMedia } from './Profile.styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Content>
        <Photo
          src={
            'https://media.licdn.com/dms/image/C4D03AQENFl70VuYPYg/profile-displayphoto-shrink_800_800/0/1647521107980?e=2147483647&v=beta&t=3SFXrWwxT0LTg7R-Uz3ia5tfnKqxYsQ80bEwmgIybsY'
          }
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
