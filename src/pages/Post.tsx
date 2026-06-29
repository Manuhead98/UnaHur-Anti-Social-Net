import PostCard from "../components/feed/PostCard";
import ComentarioCard from "../components/feed/ComentarioCard";
import ComentarioFormCard from "../components/feed/ComentarioFormCard";
function Post() {
    return (

        <div className="max-w-2xl mx-auto space-y-6">

            <PostCard />

            <div className="divider">

                Comentarios

            </div>

            <ComentarioFormCard />

            <ComentarioCard />

            <ComentarioCard />

            <ComentarioCard />

        </div>

    );
}

export default Post;