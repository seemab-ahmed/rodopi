"use client";
import { useTranslations } from "next-intl";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  ShieldCheck,
  Globe,
  Users,
  Award,
  Star,
} from "lucide-react";

const missionPoints = [
  {
    icon: <Target className="w-5 h-5 text-primary" />,
    text: "To be the employer of choice in the renewable energy and infrastructure services sectors, empowering our people and partners to shape a cleaner, more resilient future."
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    text: "Through our in-house RODOPI Academy, we recruit, train and retain skilled professionals, ensuring seamless integration into projects across diverse industries."
  },
  {
    icon: <Award className="w-5 h-5 text-primary" />,
    text: "Our mission is to empower our workforce with the tools and expertise they need to perform real, impactful work — safely, efficiently and to the highest standards."
  }
];

const visionPoints = [
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    text: "To be the employer of choice for maintenance professionals and the trusted specialized service partner for industrial and energy companies worldwide."
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
    text: "We envision a future where our expertise drives innovation and sustainability across multiple sectors, setting new standards for excellence in renewable energy services."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    text: "Delivering tailored solutions for their maintenance and repair needs with excellence and integrity, while fostering long-term partnerships built on trust and reliability."
  }
];

const values = [
  {
    icon: <Lightbulb className="w-5 h-5 text-primary" />,
    label: "We lead with a 'can-do' mindset",
    description: "Approaching every challenge with determination and optimism.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    label: "We act as partners",
    description: "Working together with humility, fairness, and honesty.",
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    label: "We take pride in delivering quality",
    description: "Holding ourselves accountable and driven by a strong will to perform.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    label: "We uphold humaneness and integrity",
    description: "Showing dignity in both our professional and personal lives.",
  },
];

const MissionVision = () => {
  const t = useTranslations("MissionVision");

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            Our Purpose
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            {t("title")}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Mission, Vision, Values Grid - Equal Height Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mission Panel */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            </div>
            <div className="flex-1">
              <div className="space-y-3">
                {missionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors duration-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      {point.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Panel */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            </div>
            <div className="flex-1">
              <div className="space-y-3">
                {visionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors duration-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      {point.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values Panel */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col h-full">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
                At RODOPI, our values are the moral foundation and ethical compass that guide every team member — shaping how we work, how we collaborate and how we present ourselves to the world.
              </p>
              <div className="space-y-3">
                {values.map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors duration-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      {value.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-sm leading-tight mb-1">
                        {value.label}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;