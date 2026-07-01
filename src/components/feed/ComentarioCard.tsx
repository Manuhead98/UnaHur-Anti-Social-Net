import Avatar from "../ui/Avatar";
import { Heart, Trash2 } from "lucide-react";

function ComentarioCard() {
    return (
        <div className="card bg-base-100 shadow-sm border border-base-300">

            <div className="card-body p-4">

                <div className="flex items-start gap-3">

                    <Avatar />

                    <div className="flex-1">

                        <div className="flex justify-between items-center">

                            <div>

                                <h3 className="font-semibold">
                                    manu_dev
                                </h3>

                                <span className="text-xs opacity-60">
                                    hace 15 minutos
                                </span>

                            </div>

                            <button className="btn btn-ghost btn-circle btn-sm">

                                <Trash2 size={18} />

                            </button>

                        </div>

                        <p className="mt-3">

                            Muy buena publicación 👏. Me gustó mucho la explicación.

                        </p>

                        <div className="mt-4 flex gap-2">

                            <button className="btn btn-ghost btn-sm">

                                <Heart size={18} />

                                Me gusta

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ComentarioCard;