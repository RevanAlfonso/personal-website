import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, description, imgUrl, linkUrl }) => {
  const content = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={title} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col sm={6} md={4} className="mb-4">
      {linkUrl ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Col>
  );
};
