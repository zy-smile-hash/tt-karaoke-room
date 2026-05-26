import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Frontend Engineer',
    company: 'TechCorp',
    content: 'TeleportHQ has completely changed how we work. We went from spending hours converting designs to code to exporting in minutes. The quality is amazing!',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'UI Designer',
    company: 'DesignStudio',
    content: 'Finally, a tool that understands what designers need. The exported code is clean and follows best practices. My dev team loves it!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'StartupXYZ',
    content: 'The time savings are incredible. We shipped our MVP 3 weeks early thanks to TeleportHQ. Highly recommend to any team.',
    rating: 5,
  },
];

const companies = ['Google', 'Meta', 'Amazon', 'Netflix', 'Spotify', 'Stripe'];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Developers Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of developers who trust TeleportHQ for their design-to-code workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-100" />
                <p className="text-gray-700 pl-6">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
