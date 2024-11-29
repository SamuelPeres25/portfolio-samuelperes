import { useEffect, useState } from "react";
import ProfileImg from "../../assets/profile.svg";
import { TestimonialCard } from "./components";
// import "./TestimonialSlider.scss";

// export function TestimonialSlider() {
//   const testimonialCardInfo = [
//     {
//       name: "Fulano de tal code start 1",
//       description: "Lorem Ipsum is simply dummy text of the printing and in.",
//       occupation: "CEO da Code Start 1",
//       imgProfile: ProfileImg,
//       highlighted: false,
//     },
//     {
//       name: "Fulano de tal code start 2",
//       description: "Otimizando o codigo",
//       occupation: "CEO da Code Start 2",
//       imgProfile: ProfileImg,
//       highlighted: true,
//     },
//     {
//       name: "Fulano de tal code start 3",
//       description: "Otimizando o codigo",
//       occupation: "CEO da Code Start 3",
//       imgProfile: ProfileImg,
//       highlighted: false,
//     },
//     {
//       name: "Fulano de tal code start 4",
//       description: "Otimizando o codigo",
//       occupation: "CEO da Code Start 4",
//       imgProfile: ProfileImg,
//       highlighted: true,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [visibleCardCount, setVisibleCardCount] = useState(3)


//   useEffect(() => {
//         const handleResize = () => {
//           setVisibleCardCount(window.innerWidth <= 1200 ? 1 : 3)
//         }

//         handleResize()

//         window.addEventListener("resize", handleResize)

//         return () => window.removeEventListener("resize", handleResize)
//   }, [])



//   const showNextCards = () => {
//     if(currentIndex + visibleCardCount < testimonialCardInfo.length){
//       setCurrentIndex(currentIndex + 1)
//     }
//   }
  
//   const showPrevCards = () => {
//     if(currentIndex > 0){
//       setCurrentIndex(currentIndex - 1);
//     }
//   }

//   return (
//     <section id="testimonial">
//       <div className="container">
//         <div className="header-section">
//           <h1 className="title">Depoimentos</h1>
//           <h2 className="subtitle">Recomendações sobre o meu trabalho</h2>
//         </div>
//         <div className="info-testimonial">
//           <div className="controls-testimonials">
//             <div className={`prev-testimonial ${currentIndex === 0 ? "disabled" : ""}`}  onClick={showPrevCards}> {"<"} </div>
//             <div 
//               className={`next-testimonial ${currentIndex + visibleCardCount >= testimonialCardInfo.length ? "disabled" : "" }`} onClick={showNextCards}> {">"} </div>
//           </div>
//         </div>
//         <div className="container-testimonials">
//           {testimonialCardInfo.slice(currentIndex, currentIndex + visibleCardCount).map((cardInfo, index) => {
//             return (
//               <TestimonialCard
//                 key={index}
//                 name={cardInfo.name}
//                 occupation={cardInfo.occupation}
//                 description={cardInfo.description}
//                 imgProfile={cardInfo.imgProfile}
//                 highlighted={cardInfo.highlighted}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }
