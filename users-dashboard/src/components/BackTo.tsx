import Link from "next/link";
import { FC } from "react";
import { TiArrowBack } from "react-icons/ti";

interface BackToProps {
  url: string;
}

const BackTo: FC<BackToProps> = ({ url }) => {
  return (
    <Link
      className="absolute top-1 left-1 bg-base rounded-full text-3xl md:text-4xl"
      href={url}
    >
      <TiArrowBack className=" hover:text-secondary" />
    </Link>
  );
};

export default BackTo;
