
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
        <div>
            {title}
            {description}
            {image}
        </div>
    );
};

export default PostItem;