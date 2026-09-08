// src/components/Features.jsx
import Greeting from "./props/Greetings";
import FeatureList from "./props/FeatureList";

const features = [
  {
    id: 1,
    title: "Simple",
    description: "Easy to understand structure suitable for learning React.",
  },
  {
    id: 2,
    title: "Reusable",
    description: "The page is divided into reusable React components.",
  },
  {
    id: 3,
    title: "Responsive",
    description: "Tailwind CSS makes it easy to build responsive layouts.",
  },
  {
    id: 4,
    title: "React Components",
    description: "Built with modern React and Tailwind CSS.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
        </div>
        
        {/* Greeting Component */}
        <p className="mt-3 text-gray-600 text-center">
          <Greeting name="Gheanina" age={20} />
        </p>
        
        {/* Feature List */}
        <div className="mt-10">
          <FeatureList features={features} />
        </div>
      </div>
    </section>
  );
}

export default Features;