import { Zap, Shield, Users, BarChart, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption to keep your data safe and protected.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work seamlessly with your team with real-time collaboration and communication tools.'
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Get deep insights with powerful analytics and reporting to make data-driven decisions.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer support to help you whenever you need assistance.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Access your work anywhere with our fully responsive mobile applications.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help you work smarter, not harder. Built for teams of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:shadow-xl transition duration-300 hover:-translate-y-1">
                <div className="bg-primary-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
