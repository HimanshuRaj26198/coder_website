const BlogCard = ({ blog, pathCategory = "" }) => {
    return <>
        <div className="md:flex md:space-x-6 py-5" bis_skin_checked={1}>
            <a href={`/blogs/${blog.category_ref}/${blog.slug}`}>
                <div
                    className="md:w-64 w-full h-40 overflow-hidden rounded-lg relative shadow-sm"
                    bis_skin_checked={1}
                >
                    <img
                        src={blog.headerImg}
                        alt={blog.descripiton}
                        className="w-full h-full absolute inset-0 object-cover"
                    />
                    <div
                        className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5"
                        bis_skin_checked={1}
                    >
                        {blog.category}
                    </div>
                </div>
            </a>
            <div className="flex-1 md:pt-0 pt-4" bis_skin_checked={1}>
                <a
                    href={`/blogs/${blog.category_ref}/${blog.slug}`}
                    className="text-lg font-semibold line-clamp-2 leading-8"
                >

                    {blog.title}
                </a>
                <p className="line-clamp-2">

                    {blog.description}
                </p>
                <div
                    className="flex items-center pt-2 text-sm"
                    bis_skin_checked={1}
                >
                    <div className="flex items-center" bis_skin_checked={1}>

                        <ion-icon
                            name="thumbs-up-outline"
                            className="text-xl mr-2 md hydrated"
                            role="img"
                            aria-label="thumbs up outline"
                        />
                        12
                    </div>
                    <div className="flex items-center mx-4" bis_skin_checked={1}>
                        <ion-icon
                            name="chatbubble-ellipses-outline"
                            className="text-lg mr-2 md hydrated"
                            role="img"
                            aria-label="chatbubble ellipses outline"
                        />
                        12
                    </div>
                    <div className="flex items-center" bis_skin_checked={1}>

                        <ion-icon
                            name="bookmark-outline"
                            className="text-xl mr-2 md hydrated"
                            role="img"
                            aria-label="bookmark outline"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default BlogCard;