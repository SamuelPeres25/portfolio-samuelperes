import "./TestimonialCard.scss";

interface TestimonialCardProps {
  description: string;
  imgProfile: string;
  name: string;
  occupation: string;
  highlighted: boolean;
}

export function TestimonialCard({
  name,
  description,
  imgProfile,
  occupation,
  highlighted,
}: TestimonialCardProps) {
  return (
      <div
        className={`${
          highlighted ? "fill-in-card-testimonial" : "outline-card-testimonial"
        }`}
      >
        <p>{description}</p>
        <div className="footer-card-testimonial">
          <img
            src={imgProfile}
            alt="Imagem depoimento code start"
            width="40px"
            height="40px"
          />
          <div className="info-personal-testimonial">
            <p className="name-testimonial">{name}</p>
            <p className="occupation-testimonial">{occupation}</p>
          </div>
        </div>
      </div>
  );
}
