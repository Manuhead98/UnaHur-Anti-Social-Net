import PostCard from "../components/feed/PostCard";

function Home() {
    return (
        <div className="container mx-auto px-4">

            <div className="max-w-2xl mx-auto space-y-6">

                <PostCard />
                <PostCard />
                <PostCard />

            </div>

        </div>
    );
}

export default Home