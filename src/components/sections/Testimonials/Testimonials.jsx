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
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-card__avatar"
                />

                <div>
                  <h3 className="testimonial-card__name">{testimonial.name}</h3>

                  <p className="testimonial-card__role">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
