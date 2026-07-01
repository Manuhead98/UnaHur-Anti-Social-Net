import avatarFemenino from "../../assets/avatars/avatar_femenino.png";
import avatarMasculino from "../../assets/avatars/avatar_masculino.png";

// Definimos las propiedades que recibirá el componente.
type AvatarProps = {

    // Nickname del usuario.
    nickname?: string;

};

function Avatar({ nickname }: AvatarProps) {

    // Por defecto mostramos el avatar masculino.
    let avatar = avatarMasculino;

    // Si el nickname corresponde a Caro, usamos el avatar femenino.
    if (nickname?.toLowerCase() === "caro") {
        avatar = avatarFemenino;
    }

    return (

        <div className="avatar">

            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                <img
                    src={avatar}
                    alt={nickname}
                />

            </div>

        </div>

    );

}

export default Avatar;