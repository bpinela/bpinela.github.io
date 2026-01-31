import ProfilePhoto from "@/assets/profile.jpg";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-60px)] px-4">
      <div className="text-center animate-fade-in motion-safe:animate-fade-in-slow">
        <Image
          src={ProfilePhoto}
          alt="Bruno Pinela"
          width={120}
          height={120}
          priority
          className="rounded-full mx-auto shadow-lg transition-transform duration-300 hover:scale-105"
        />
        <h1 className="py-4 text-2xl font-semibold">Bruno Pinela</h1>
        <span className="block text-sm tracking-wide">Front End Engineer</span>

        <div className="py-6 flex justify-center gap-6">
          <Link
            href="https://github.com/bpinela"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            <Github className="w-6 h-6 hover:scale-110 transition-transform" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bruno-pinela/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-200"
          >
            <Linkedin className="w-6 h-6 hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
