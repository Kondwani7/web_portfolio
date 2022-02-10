import Image from "next/image";

const Project_preview = () => {

  const title: string = "BERT IMDB reviews"
  const desc: string = "Natural language Processing classify  Movie IMDB reviews"
  return (
    <div className="flex gap-4">
      <div className="relative w-20 h-10">
        <Image src={"/imdb2.png"} layout="fill" alt="imdb reviews"/> 
      </div>
      <a href="" className='font-bold underline hover:text-indigo-600'>
        {title}
      </a>
      <div>{desc}</div>
    </div>
  );
};

export default Project_preview;
