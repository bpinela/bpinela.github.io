import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="absolute bottom-4 w-full text-center text-xs leading-6">
      <div>
        <span>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="border-b border-current"
          >
            CC BY-NC 4.0
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
