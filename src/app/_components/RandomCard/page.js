const RandomCard = ({ post, postCategory }) => {
    function formatFirestoreTimestamp(timestamp) {
        if (!timestamp) return "Unknown Date";  // ✅ Handle undefined values

        const date = new Date(timestamp); // ✅ Convert ISO string to Date object
        return date.toLocaleDateString("en-US", {
            month: "short",  // "Feb"
            day: "numeric",  // "4"
            year: "numeric", // "2025"
        });
    }

    return <>
        <li tabIndex={-1} className="uk-active">
            <div bis_skin_checked={1}>
                <a
                    href={`/blogs/${postCategory}/${post.slug}`}
                    className="w-full md:h-32 h-28 overflow-hidden rounded-lg relative block"
                >
                    <img
                        src={post.headerImg}
                        alt=""
                        className="w-full h-full absolute inset-0 object-cover"
                    />
                </a>
                <div className="pt-3" bis_skin_checked={1}>
                    <a
                        href={`/blogs/${postCategory}/${post.slug}`}
                        className="font-semibold line-clamp-2"
                    >
                        {post.title}
                    </a>
                    <div className="pt-2" bis_skin_checked={1}>
                        <p className="text-sm">CoderCrafter</p>
                        <div
                            className="flex space-x-2 items-center text-xs"
                            bis_skin_checked={1}
                        >
                            <div bis_skin_checked={1}> {formatFirestoreTimestamp(post.createdAt)} </div>
                            <div className="md:block hidden" bis_skin_checked={1}>
                                ·
                            </div>
                            <div className="flex items-center" bis_skin_checked={1}>
                                {" "}
                                <ion-icon
                                    name="chatbox-ellipses-outline"
                                    className="text-base leading-0 mr-2 md hydrated"
                                    role="img"
                                    aria-label="chatbox ellipses outline"
                                />{" "}
                                12{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </>
}

export default RandomCard;