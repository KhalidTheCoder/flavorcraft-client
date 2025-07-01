import Lottie from 'lottie-react';
import cookingAnim from '../assets/Animation - 1751387456233.json';

const HowItWorks = () => {
  return (
    <div className=" md:flex justify-center items-center bg-yellow-50 py-12 px-6">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-yellow-700">How It Works</h2>
        <ul className="list-disc list-inside text-2xl text-gray-700">
          <li>👨‍🍳 Add Your Secret Recipe</li>
          <li>📚 Browse Global Cuisines</li>
          <li>❤️ Like And Save Your Favorites</li>
          <li>📥 Manage Your Own Recipe Book</li>
        </ul>
      </div>
      <div>
        <Lottie animationData={cookingAnim} loop={true} />
      </div>
    </div>
  );
};

export default HowItWorks;