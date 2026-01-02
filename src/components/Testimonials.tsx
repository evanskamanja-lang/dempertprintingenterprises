import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I was served well and I enjoyed the customer service. Goods ordered were delivered on time. Highly recommend Dempert Printing for all your paper needs!",
    name: "Kamanja Gitahi",
    role: "Business Owner",
    initial: "K",
  },
  {
    id: 2,
    quote:
      "We've been ordering photocopy paper from Dempert for over 2 years. Their prices are unbeatable and the quality is always consistent. Great partner for our school.",
    name: "Mary Wanjiku",
    role: "School Administrator",
    initial: "M",
  },
  {
    id: 3,
    quote:
      "As a printing business, we need reliable paper suppliers. Dempert has never disappointed us. Fast delivery, quality products, and excellent customer support.",
    name: "Peter Mwangi",
    role: "Print Shop Owner",
    initial: "P",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mt-2 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it – hear from businesses who trust Dempert
            Printing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.initial}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
