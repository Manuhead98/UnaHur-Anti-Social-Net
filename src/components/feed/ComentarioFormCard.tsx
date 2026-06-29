import { useState } from "react";
import Avatar from "../ui/Avatar";
import { SendHorizontal } from "lucide-react";

function ComentarioFormCard() {

    const [comment, setComment] = useState("");

    const handleSubmit = () => {

        console.log(comment);

        setComment("");

    };

    return (

        <div className="card bg-base-100 shadow-md border border-base-300">

            <div className="card-body">

                <div className="flex gap-4">

                    <Avatar />

                    <div className="flex-1">

                        <textarea
                            className="textarea textarea-bordered w-full min-h-28"
                            placeholder="Escribí un comentario..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />

                        <div className="flex justify-between items-center mt-4">

                            <span className="text-xs opacity-60">

                                {comment.length}/300

                            </span>

                            <button
                                className="btn btn-primary"
                                disabled={!comment.trim()}
                                onClick={handleSubmit}
                            >

                                <SendHorizontal size={18} />

                                Comentar

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ComentarioFormCard;