import Image from "next/image";
import StudentsImg_1 from "@/assets/images/student-1.jpg";
import { ImageGridOne, ImageGridTwo } from "@/constants/courses.data";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";

const StudentsTab: React.FC = () => {
  return (
    <div className="box-content">
      <h2 className="text-2xl font-bold mb-4">Graduated Students</h2>
      <div>
        <Image
          className="rounded-lg object-cover md:h-[400px] mb-3"
          src={StudentsImg_1}
          alt="Students IMETS"
        />
        {/* Grid Images One  */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4  md:h-[650px] mb-6">
          {ImageGridOne.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden ${
                image.isFeatured ? "col-span-1 md:col-span-2 row-span-2" : ""
              }`}>
              <>
                <Image
                  src={image.image}
                  alt={image.image}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </>
            </div>
          ))}
        </div>
        {/* Grid Images Two  */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  md:h-[650px] mb-6">
          {ImageGridTwo.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden ${
                image.isFeatured ? "col-span-2 row-span-2" : ""
              }`}>
              <>
                <Image
                  src={image.image}
                  alt={image.image}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </>
            </div>
          ))}
        </div>
        <LimitedCounterOffer initialCount={10} duration={5000} />
      </div>
    </div>
  );
};
export default StudentsTab;
