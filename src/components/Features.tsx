import { Code, Layers, GitBranch, Zap, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Production-Ready Code',
    description: 'Export clean, maintainable code that follows best practices. No messy generated code.',
  },
  {
    icon: Layers,
    title: 'Multi-Framework Support',
    description: 'Supports React, Vue, HTML, CSS, and more. Choose your preferred tech stack.',
  },
  {
    icon: GitBranch,
    title: 'Component-Based',
    description: 'Automatically generates reusable components. Perfect for modern frontend development.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Export designs to code in seconds. No waiting, no complex setup.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your designs never leave your computer. All processing happens locally.',
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'Works on macOS, Windows, and Linux. Consistent experience everywhere.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TeleportHQ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built by developers, for developers. We understand what you need to ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
