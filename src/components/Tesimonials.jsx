import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Keyboard,
} from "swiper/modules";

import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Adrian Navarro",
    role: "Business Owner",
    message:
      "Working with this team was an incredible experience. Their professionalism, attention to detail, and commitment to excellence exceeded our expectations.",
  },
  {
    name: "Zara Whitmore",
    role: "Project Manager",
    message:
      "They delivered beyond what we imagined. The communication was seamless and the final result was outstanding.",
  },
  {
    name: "Elliot Vance",
    role: "Entrepreneur",
    message:
      "Reliable, professional, and highly skilled. I highly recommend their services to anyone looking for quality work.",
  },
  {
    name: "Larry Brooks",
    role: "Operations Director",
    message:
      "From start to finish, everything was handled perfectly. Their dedication to customer satisfaction is unmatched.",
  },
  {
    name: "Leonard Hayes",
    role: "Startup Founder",
    message:
      "Exceptional service and amazing results. They truly understand their clients' needs.",
  },
  {
    name: "Brandon Keller",
    role: "Property Developer",
    message:
      "Apex Construct delivered our commercial building ahead of schedule without compromising on quality. Their workmanship and project management were exceptional.",
  },
  {
    name: "Madison Reeves",
    role: "Real Estate Investor",
    message:
      "From planning to execution, Apex Construct handled every detail professionally. The structure quality and finishing exceeded our expectations.",
  },
  {
    name: "Tyler Dawson",
    role: "Homeowner",
    message:
      "Building our home with Apex Construct was completely stress-free. Their team was transparent, reliable, and highly skilled throughout the entire process.",
  },
  {
    name: "Vanessa Carter",
    role: "Business Owner",
    message:
      "They transformed our office space into a modern, functional environment. Apex Construct delivers exactly what they promise.",
  },
  {
    name: "Derek Holloway",
    role: "Facility Manager",
    message:
      "Their attention to structural integrity and safety standards truly stands out. Apex Construct is a construction partner you can trust.",
  },
  {
    name: "Courtney Blake",
    role: "Interior Consultant",
    message:
      "I’ve worked with many contractors, but Apex Construct’s finishing quality and attention to detail are unmatched.",
  },
  {
    name: "Trevor Whitfield",
    role: "Hotel Owner",
    message:
      "Professional, efficient, and detail-oriented. Apex Construct completed our renovation on time and within budget.",
  },
  {
    name: "Alyssa Monroe",
    role: "Architect",
    message:
      "Apex Construct executes designs with precision. Their collaboration and technical expertise make every project successful.",
  },
  {
    name: "Jordan Pierce",
    role: "Retail Business Owner",
    message:
      "The quality of construction and level of communication we received were outstanding. I highly recommend Apex Construct.",
  },
  {
    name: "Nathaniel Brooks",
    role: "Warehouse Owner",
    message:
      "Strong project management, excellent craftsmanship, and reliable delivery timelines. Apex Construct exceeded expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section max-w-7xl mx-auto px-6 py-24">
      <div className="container ">
        {/* Heading */}
        <div className="testimonials-header">
          <h2 className="section-heading2">What Our Clients Say</h2>
          <p className="section-subheading2">
            Trusted by businesses and individuals who value quality,
            reliability, and exceptional service.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, Keyboard]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                {/* Stars */}
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>

                {/* Message */}
                <p className="testimonial-text">"{item.message}"</p>

                {/* User */}
                <div className="testimonial-user">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
