import { useParams } from "react-router-dom";
import classes from "./Details.module.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import useFetch from "../../hooks/useFetch";

function Details() {
  const { mediaType, id } = useParams();
  const { data, isLoading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, isLoading: isCreditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  return (
    <section>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </section>
  );
}

export default Details;
