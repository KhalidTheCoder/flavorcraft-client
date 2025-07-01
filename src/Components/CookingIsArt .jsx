import { Typewriter } from "react-simple-typewriter";

const CookingIsArt = () => {
  return (
    <div className="text-center py-12 bg-orange-50">
      <h2 className="text-3xl font-bold text-[#A31621] mb-4">
        Why Cooking Is An Art?
      </h2>
      <p className="text-xl text-gray-700">
        <Typewriter
          words={[
            "It Brings Families Together 🍽️",
            "It Expresses Love 💕",
            "It Reflects Culture 🌎",
            "It Sparks Creativity 🎨",
            "It’s More Than Food, It’s A Story 📖",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
    </div>
  );
};

export default CookingIsArt;
