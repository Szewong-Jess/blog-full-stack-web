import { useNavigate } from "react-router-dom";
import { titleCase } from "../../helpers";
import "./style.css";

const MainArticle = ({
  author,
  content,
  createdAt,
  updatedAt,
  isFeature,
  title,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="main-article-container"
      onClick={() => navigate(`/blog/${title}`)}
    >
      <span className="main-article-date">
        {new Date(updatedAt).toUTCString()}
      </span>
      <span className="main-article-title">
        {title
          .split("-")
          .map((value) => titleCase(value))
          .join(" ")}
      </span>
      <p className="main-article-content">{content}</p>
      <p className="main-article-author">{author}</p>
    </div>
  );
};

export default MainArticle;
