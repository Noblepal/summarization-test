import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    description: 'Perfect for individuals and small teams',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'Mobile app access',
      'API access'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '79',
    description: 'Best for growing businesses',
    features: [
      'Up to 20 team members',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'Mobile app access',
      'API access',
      'Custom integrations',
      'Advanced security'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '199',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Enterprise analytics',
      '24/7 phone support',
      'Mobile app access',
      'API access',
      'Custom integrations',
      'Advanced security',
      'Dedicated account manager',
      'Custom SLA'
    ],
    popular: false
  }
];

export default function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-primary-600 text-white ring-4 ring-primary-600 ring-offset-4 scale-105' : 'bg-white border-2 border-gray-200'}`}>
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-white text-primary-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.popular ? 'text-primary-100' : 'text-gray-600'}>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary-600'}`} size={20} />
                    <span className={plan.popular ? 'text-primary-50' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button onClick={scrollToContact} className={`w-full py-3 rounded-lg font-semibold transition ${plan.popular ? 'bg-white text-primary-600 hover:bg-primary-50' : 'bg-primary-600 text-white hover:bg-primary-700'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
