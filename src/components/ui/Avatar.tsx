type AvatarProps = {
    id: string;
    nickname?: string;
};

function Avatar({ id, nickname }: AvatarProps) {
    const totalAvatares = 12;

    // Convierte los últimos dos caracteres hexadecimales del ObjectId en un número
    const numero = parseInt(id.slice(-2), 16);

    // Obtiene un número entre 1 y 12
    const avatarIndex = (numero % totalAvatares) + 1;

    const avatar = `/avatars/avatar${avatarIndex}.jpg`;

    return (
        <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatar} alt={nickname} />
            </div>
        </div>
    );
}

export default Avatar;