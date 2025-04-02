import { useParams } from "react-router-dom";

import SingleArticle from "../../components/SingleArticle/SingleArticle";

const SingleArticlePage = () => {

    const { id } = useParams();

    return (
        <>
            <SingleArticle id={id} />
        </>
    )
};

export default SingleArticlePage;