import { Skeleton } from "../ui/skeleton";


type Props = {}

const PostSkeleton = (props: Props) => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[20px] w-[390px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default PostSkeleton