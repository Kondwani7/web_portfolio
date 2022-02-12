import Image from "next/image";
import Link from "next/link";

const Project_preview = () => {

  const title: string = "BERT IMDB reviews"
  const desc: string = "Natural language Processing classify  Movie IMDB reviews"
  const linkUrl: string = "/Project"
  return (
    <div className="flex gap-4 mt-4">
      <div className="relative w-20 h-10">
        <Image src={"/imdb2.png"} layout="fill" alt="imdb reviews"/> 
      </div>
      <div className="my-auto">
        <Link href={linkUrl}>
          <a className='font-bold underline hover:text-indigo-600'>
            {title}
          </a>
        </Link>
        <div>{desc}</div>
      </div>
    </div>
  );
};

export default Project_preview;
