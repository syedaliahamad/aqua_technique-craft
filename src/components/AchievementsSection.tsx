import { useEffect, useRef, useState } from 'react';

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      number: 1,
      title: "Company Founded",
      period: "2001",
      description: "Aqua Technique was established by Vikas Soni with the vision to provide clean drinking water solutions to every household in India."
    },
    {
      number: 2,
      title: "First Commercial Project",
      period: "2005",
      description: "Successfully installed our first large-scale commercial RO plant, marking the beginning of our industrial water treatment journey."
    },
    {
      number: 3,
      title: "1 Lakh+ Customers",
      period: "2015",
      description: "Achieved the milestone of serving over 1 lakh satisfied customers across residential and commercial sectors with quality water purification systems."
    },
    {
      number: 4,
      title: "Innovation in Alkaline Technology",
      period: "2020",
      description: "Launched advanced alkaline RO systems with mineral enhancement technology, providing 72 trace minerals for optimal health benefits."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-background via-background to-aqua-flow/5 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excellence in water purification technology through years of innovation
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-aqua-flow to-primary"></div>
          
          {/* Timeline Numbers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between py-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.number}
                className={`w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg transition-all duration-700 delay-${achievement.number * 200} ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              >
                {achievement.number}
              </div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="space-y-24 pt-8 pb-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.number}
                className={`flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div 
                  className={`w-full max-w-md transition-all duration-700 delay-${index * 200} ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : index % 2 === 0 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  } ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-[var(--shadow-aqua)] transition-all duration-300 border border-aqua-flow/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <h3 className="text-lg font-bold text-primary">{achievement.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium mb-3">
                      {achievement.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;