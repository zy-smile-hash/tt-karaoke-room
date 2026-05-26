import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    period: 'forever',
    description: 'Perfect for personal projects and learning',
    features: [
      '5 exports per month',
      'Basic HTML/CSS export',
      'Community support',
      'Figma plugin access',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '19',
    period: 'per month',
    description: 'For professional developers and small teams',
    features: [
      'Unlimited exports',
      'React, Vue & HTML export',
      'Priority support',
      'Component library sync',
      'Custom themes',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large teams with advanced needs',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'SSO & SAML',
      'Dedicated account manager',
      'On-premise deployment',
      'Custom SLAs',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl shadow-purple-500/25'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  {plan.price !== 'Custom' && (
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-gray-500'}`}>$</span>
                  )}
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ml-1 ${
                      plan.popular ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${
                  plan.popular ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${
                      plan.popular ? 'text-white/90' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular
                  ? 'bg-white text-purple-600 hover:bg-white/90'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
