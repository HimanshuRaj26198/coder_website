export const fetchData = async () => {
    try {
        let response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts/recently-posted`, { next: { revalidate: 60 } });
        let data = await response.json();
        return data.posts;
    } catch (err) {
        console.log(err);
    }
}

const RecentlyPosted = async () => {
    let recentPosts = await fetchData();

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
        {/*  */}
        <ul>
            {recentPosts && recentPosts.map((post, i) => {
                return <li key={i}>
                    <a
                        href={`/blogs/suggested/${post.slug}`}
                        className="hover:bg-gray-50 rounded-md p-2 -mx-2 block"
                    >
                        <h3 className="font-medium line-clamp-2">

                            {post.title}
                        </h3>
                        <div
                            className="flex items-center my-auto text-xs space-x-1.5 mt-1.5"
                            bis_skin_checked={1}
                        >
                            <div bis_skin_checked={1}> {formatFirestoreTimestamp(post.createdAt)}</div>
                            <div className="pb-1" bis_skin_checked={1}>

                                .
                            </div>
                            <ion-icon
                                name="chatbox-ellipses-outline"
                                role="img"
                                className="md hydrated"
                                aria-label="chatbox ellipses outline"
                            />
                            <div bis_skin_checked={1}> 23</div>
                        </div>
                    </a>
                </li>
            })}
        </ul></>
}

export default RecentlyPosted;