import Image from "next/image";
import StudentsImg_1 from "@/assets/images/student-1.jpg";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";

const StudentsTab: React.FC<CourseType> = ({ ImagesGrid }) => {
  return (
    <div className="box-content">
      <h2 className="mb-4 text-2xl font-bold">Graduated Students</h2>
      <div>
        <Image
          className="mb-3 rounded-lg object-cover md:h-[400px]"
          src={StudentsImg_1}
          alt="Students IMETS"
        />
        {/* Grid Images One  */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:h-[650px] md:grid-cols-5">
          {ImagesGrid.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                image.isFeatured ? "col-span-1 row-span-2 md:col-span-2" : ""
              }`}
            >
              <>
                <Image
                  src={image.image}
                  alt={image.image}
                  width={200}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </>
            </div>
          ))}
        </div>
        {/* Grid Images Two  */}
        {/* <div className="mb-6 grid grid-cols-1 gap-4 md:h-[650px] md:grid-cols-4">
          {ImageGridTwo.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                image.isFeatured ? "col-span-2 row-span-2" : ""
              }`}
            >
              <>
                <Image
                  src={image.image}
                  alt={image.image}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </>
            </div>
          ))}
        </div> */}
        <LimitedCounterOffer initialCount={10} duration={5000} />
      </div>
    </div>
  );
};
export default StudentsTab;
