import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { UserProfile } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Clock } from 'lucide-react';
import { Separator } from './ui/separator';

export function ProfileCard({ user }: { user: UserProfile }) {
  const avatar = PlaceHolderImages.find((img) => img.id === user.avatarImageId);

  return (
    <Card className="glow-on-hover flex flex-col overflow-hidden border-2 border-transparent bg-card">
      <CardHeader className="flex-row items-center gap-4 p-6">
        <Avatar className="h-16 w-16 border-2 border-primary/50">
          {avatar && <AvatarImage src={avatar.imageUrl} alt={user.username} data-ai-hint={avatar.imageHint} />}
          <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="font-headline text-2xl uppercase tracking-wider text-white">
            {user.username}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-base">
            Level {user.level}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 pt-0">
        <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{user.bio}</p>
        <Separator className="my-4 bg-border/30"/>
        <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
                <Image src={user.rankIcon} alt={user.rank} width={24} height={24} />
                <span className="font-semibold text-white">{user.rank}</span>
            </div>
             <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{user.hoursPlayed.toLocaleString()} hrs</span>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-2">
        <Button className="w-full uppercase font-bold tracking-wider">
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
