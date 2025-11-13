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

const iconMap = {
  0: <Target className="w-5 h-5 text-primary" />,
  1: <Users className="w-5 h-5 text-primary" />,
  2: <Award className="w-5 h-5 text-primary" />,
};

const visionIconMap = {
  0: <Globe className="w-5 h-5 text-primary" />,
  1: <Lightbulb className="w-5 h-5 text-primary" />,
  2: <ShieldCheck className="w-5 h-5 text-primary" />,
};

const valueIconMap = {
  0: <Lightbulb className="w-5 h-5 text-primary" />,
  1: <ShieldCheck className="w-5 h-5 text-primary" />,
  2: <Globe className="w-5 h-5 text-primary" />,
  3: <Users className="w-5 h-5 text-primary" />,
};

const MissionVision = () => {
  const t = useTranslations("MissionVisions");

  // Get mission points dynamically
  const missionPoints = [0, 1, 2].map(i => ({
    icon: iconMap[i],
    text: t(`mission.points.${i}.text`)
  }));

  // Get vision points dynamically
  const visionPoints = [0, 1, 2].map(i => ({
    icon: visionIconMap[i],
    text: t(`vision.points.${i}.text`)
  }));

  // Get values dynamically
  const values = [0, 1, 2, 3].map(i => ({
    icon: valueIconMap[i],
    label: t(`values.points.${i}.label`),
    description: t(`values.points.${i}.description`)
  }));

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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("mission.title")}</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("vision.title")}</h3>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t("values.title")}</h3>
            </div>
            <div className="flex-1">
              <p className="text-gray-600 text-base leading-relaxed mb-6 text-center">
                {t("values.intro")}
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