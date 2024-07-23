import { formatDate } from "@/app/blog/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Card className="min-w-[350px] lg:min-w-[310px] min-h-[200px] md:min-h-[240px] lg:min-h-[270px] shadow-lg border border-t-0 border-l-0 border-[rgba(10,10,10, .5)]">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-gray-500">{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
}