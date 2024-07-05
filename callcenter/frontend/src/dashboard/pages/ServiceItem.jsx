import routerIcon from "../../assets/servicios/router.png";

export const ServiceItem = ({ key, service }) => {
  return (
    <>
        <div className="product-added-card">
          <img
            className="product-added-img"
            src={routerIcon}
            alt="Admin Panel"
          />
          <div className="product-added-card-body">
            <h5 className="product-added-title">{ service.nombre_servicio }</h5>
            <div className="product-added-price">${ service.precio }</div>
            <div className="product-added-description">
              { service.descripcion }
            </div>
            
          </div>
        </div>
    </>
  );
};
