// Recommendation

import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, isLoading } = useFetch(`/${mediaType}/${id}/recommendations`);

  return (
    <Carousel
      data={data?.results}
      isLoading={isLoading}
      endpoint={mediaType}
      title={"Recommendations"}
    />
  );
};

export default Recommendation;
