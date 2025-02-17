import { useEffect, useState } from "react";

const useGeoInfo = () => {
  const [data, setData] = useState<GeoInfo>({} as GeoInfo);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getGeoInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://ipapi.co/json/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("Error fetching geo info");
      console.log("Error fetching geo info:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return { data, error, loading };
};

export default useGeoInfo;
