import "./Testimonials.css";

import SectionHeading from "../../ui/SectionHeading";
import { Star } from "lucide-react";

import { testimonials } from "./testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <SectionHeading
          badge="Client Stories"
          title="Trusted by Businesses We Work With"
          description="We believe successful software is built on collaboration, transparency, and delivering measurable business value."
        />

        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    strokeWidth={1.8}
                  />
                ))}
              </div>

              <p className="testimonial-card__review">"{testimonial.review}"</p>

              <div className="testimonial-card__author">
                <p className="testimonial-card__company">
                  Client feedback · {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
