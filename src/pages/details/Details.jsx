import { useParams } from "react-router-dom";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./similar/Similar";
import Recommendation from "./recommendation/Recommendation";

function Details() {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits } = useFetch(`/${mediaType}/${id}/credits`);
  console.log("Rerender");
  return (
    <section>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
        credits={credits}
        isLoading={isLoading}
      />
      <VideosSection data={data} isLoading={isLoading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </section>
  );
}

export default Details;
