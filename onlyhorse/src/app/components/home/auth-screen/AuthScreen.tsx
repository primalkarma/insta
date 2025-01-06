import React from "react";
import HeroSection from "./HeroSection";
import UnderlinedText from "../../decorators/UnderlinedText";
import TodaysHighlights from "./TodaysHighlights";

const AuthScreen = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div className="mt-12 mb-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-3xl md:text-5xl tracking-tight mt-4 mb-8 font-semibold text-center">
            Today's <UnderlinedText className="underline-offset-8 md:underline-offset-[15px] decoration-wavy">Highlights</UnderlinedText>
          </p>
          {/* Featured Post */}
          <TodaysHighlights />
        </div>  
      </div>
    </div>
  );
};

export default AuthScreen;
