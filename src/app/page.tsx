import TimeLine from "@/features/home/components/TimeLine";
import Cover from "@/features/home/components/Cover";
import Stack from "@/features/home/components/Stack";


export default function Home() {
  return (
    <div className="">
     <div>
      <Cover/>
     </div>
     <div>
      <Stack/>
     </div>
     <div>
      <TimeLine/>
     </div>
    </div>
  );
}
