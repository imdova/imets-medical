import Image from "next/image";
import StudentsImg_1 from "@/assets/images/student-1.jpg";
import LimitedCounterOffer from "@/components/LimitedCounterOffer";
import { ImagesGrid } from "@/constants/image-grid.data";

const StudentsTab: React.FC<CourseType> = ({ form }) => {
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
          {ImagesGrid.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? "col-span-1 row-span-2 md:col-span-2" : ""
              }`}
            >
              <>
                <Image
                  src={image}
                  alt={"student Image"}
                  width={200}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </>
            </div>
          ))}
        </div>
        {/* Grid Images Two  */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:h-[650px] md:grid-cols-4">
          {ImagesGrid.slice(6, 12).map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <>
                <Image
                  src={image}
                  alt={"student Image"}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </>
            </div>
          ))}
        </div>
        <LimitedCounterOffer form={form} />
      </div>
    </div>
  );
};
export default StudentsTab;
