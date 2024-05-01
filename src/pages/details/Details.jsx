import { useParams } from "react-router-dom";
import classes from "./Details.module.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";
import VideosSection from "./videosSection/VideosSection";

function Details() {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, isLoading: isLoadingCredits } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log("Rerender");
  return (
    <section>
      <DetailsBanner
        video={data?.results?.[0]}
        crew={credits?.crew}
        credits={credits}
        isLoadingCredits={isLoadingCredits}
      />
      <VideosSection data={data} isLoading={isLoading} />
    </section>
  );
}

export default Details;
