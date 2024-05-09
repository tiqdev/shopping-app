import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  // Get id from URL and get the item with that id from the redux store with useMemo
  return (
    <div>
      <h1>Detail {id}</h1>
    </div>
  );
};

export default Detail;
