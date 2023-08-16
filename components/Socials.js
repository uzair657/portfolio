import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        href={"https://github.com/uzair657"}
        className="hover:text-blue-400 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/uzair657/"}
        className="hover:text-blue-400 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.instagram.com/itx.uzii/"}
        className="hover:text-blue-400 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/uzair.657"}
        className="hover:text-blue-400 transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
    </div>
  );
};

export default Socials;
