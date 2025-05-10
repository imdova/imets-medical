import { freeEvents } from "@/constants/free-events";
import FreeEventPage from "./free-event";

const page = () => {
  const event = freeEvents[0];
  return <FreeEventPage event={event} />;
};

export default page;
