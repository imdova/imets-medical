import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-pulse">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default Loading;
