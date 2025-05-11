import Image from "next/image";

const PostItem = ({
    title,
    description,
    image,

} : {
    title: string;
    description: string;
    image: string;
}) => {
    return(
        <div className="w-full border-1 border-black p-4">
            <div className="text-[2vw]">
                {title}
            </div>
            <div className="flex gap-4 items-start">
                <div className = "bg-black basis-1/3 h-[20vw]">
                    {/* <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className="w-full h-auto"
                    /> */}
                </div>
                <div className = "text-[1vw] basis-2/3">
                    {description} 
                </div>
            </div>
        </div>
    );
};

export default PostItem;