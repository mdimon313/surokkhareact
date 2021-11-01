function SinglePortalCard({ src, link, title }) {
  return (
    <div class="col-12 col-sm-4 col-md-4">
      <div
        class="
                  m_portal_img
                  d-flex
                  flex-column
                  justify-content-center
                  m-auto
                  text-center
                "
      >
        <a href={link} target="_blank" rel="noreferrer">
          <img src={src} alt={title} class="img-fluid" />
        </a>
        <a href={link} class="m_link pt-2" target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
}

export default SinglePortalCard;
