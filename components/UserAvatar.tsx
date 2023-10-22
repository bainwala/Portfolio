import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar({
    name, 
    image,
    className
}: {
    name: string,
    image: string,
    className?: string
}) {
  return (
    <Avatar className={cn('bg-white text-black', className)}>
      <AvatarImage src={image} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
