function SingleCard({ desc, img, title }) {
  return (
    <div className="col-12 col-sm-4 pt-4 text-center">
      <div className="process_img">
        <img src={img} alt={title} className="img-fluid mb-3" />
      </div>
      <div className="process_disc">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SingleCard;
