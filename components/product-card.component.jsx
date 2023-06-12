

export const ProductCard = ({ product }) => {
  const { featuredImage,title,description } = product
  return (
    <a className="card w-96 bg-base-100 shadow-xl" >
      <figure>
        <img
          src={ featuredImage.url }
          alt={ featuredImage.alt }
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          { title }
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{ description }</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </a>
  );
};
