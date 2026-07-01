type AvatarProps = {
    id?: string;
    nickname?: string;
    size?: string;
};

function Avatar({ id = "", nickname, size = "w-16" }: AvatarProps) {
    const totalAvatares = 12;

    const numero = id
        ? parseInt(id.slice(-2), 16)
        : nickname?.toLowerCase() === "caro"
            ? 1
            : 2;

    const avatarIndex = (numero % totalAvatares) + 1;

    const avatar = `/avatars/avatar${avatarIndex}.jpg`;

    return (
        <div className="avatar">
            <div className={`${size} rounded-full ring ring-primary ring-offset-base-100 ring-offset-2`}>
                <img src={avatar} alt={nickname || "Avatar"} />
            </div>
        </div>
    );
}

export default Avatar;