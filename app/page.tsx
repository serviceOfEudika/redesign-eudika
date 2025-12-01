import HowEudikaWorks from "@/src/Components/sections/Home/HowEudikaWorks";
import OurProTutors from "@/src/Components/sections/Home/OurProTutors";
import FQA from "@/src/Components/common/FQA";
import StartTeachingToday from "@/src/Components/sections/Home/StartTeachingToday";
import ChooseYourLearningStyle from "@/src/Components/sections/Home/ChooseYourLearningStyle";
import SubjectTutorsDiscover from "@/src/Components/sections/Home/SubjectTutorsDiscover";
import FindTutorsNearby from "@/src/Components/sections/Home/FindTutorsNearby";
import EudikaUniqueLearning from "@/src/Components/sections/Home/EudikaUniqueLearning";
import TrustedLearningBenefits from "@/src/Components/sections/Home/TrustedLearningBenefits";
import OurAchievements from "@/src/Components/sections/Home/OurAchievements";
import ExploreEudika from "@/src/Components/sections/Home/ExploreEudika";
import LovedbyOurCommunity from "@/src/Components/sections/Home/LovedbyOurCommunity";

export default function Home() {
  return (
    <div className="">
    <OurProTutors></OurProTutors>
    <HowEudikaWorks></HowEudikaWorks>
    <StartTeachingToday></StartTeachingToday>
    <ChooseYourLearningStyle></ChooseYourLearningStyle>
    <SubjectTutorsDiscover></SubjectTutorsDiscover>
    <FindTutorsNearby></FindTutorsNearby>
    <EudikaUniqueLearning></EudikaUniqueLearning>
    <TrustedLearningBenefits></TrustedLearningBenefits>
    <LovedbyOurCommunity></LovedbyOurCommunity>
    <OurAchievements></OurAchievements>
    <FQA></FQA>
    <ExploreEudika></ExploreEudika>
    </div>
  );
}
