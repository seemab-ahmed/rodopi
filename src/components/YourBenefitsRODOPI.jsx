import { Heart, Eye, Star, Briefcase, Globe } from "lucide-react";

const iconMap = {
  heart: Heart,
  eye: Eye,
  star: Star,
  briefcase: Briefcase,
  globe: Globe
};

export const YourBenefitsRodopi = ({ data }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            {data.section_label}
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-gray-900">
              {data.title}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Vision & Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Vision */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Eye className="w-4 h-4" />
              {data.vision_label}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {data.vision_title}
            </h2>
            {data.vision_subtitle && (
              <h5 className="text-xl sm:text-2xl font-semibold text-primary leading-tight">
                {data.vision_subtitle}
              </h5>
            )}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {data.vision_description}
            </p>
          </div>

          {/* Right - Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.cards?.map((card, index) => {
              const Icon = iconMap[card.icon] || Star; // default icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
