import DataBrands from "./DataBrands";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="container-brands">
      <h1 className="header-brand">BRANDS</h1>
      <div className="brands-container">
        {DataBrands.map((brand, index) => {
          return (
            <div className="inner-brand" key={index}>
              <div className="brand">
                <img src={brand.img_brand} alt={brand.brand} width="160px" height="40px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
