import HowEudikaWorks from "@/src/Components/sections/Home/HowEudikaWorks";
import OurProTutors from "@/src/Components/sections/Home/OurProTutors";
import FQA from "@/src/Components/common/FQA";
import StartTeachingToday from "@/src/Components/sections/Home/StartTeachingToday";
import ChooseYourLearningStyle from "@/src/Components/sections/Home/ChooseYourLearningStyle";

export default function Home() {
  return (
    <div className="">
    <OurProTutors></OurProTutors>
    <HowEudikaWorks></HowEudikaWorks>
    <StartTeachingToday></StartTeachingToday>
    <ChooseYourLearningStyle></ChooseYourLearningStyle>
    <FQA></FQA>
    </div>
  );
}
