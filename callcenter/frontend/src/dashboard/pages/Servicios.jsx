import { Header, Sidebar } from "../components"
import { fetchServicios } from "../helpers/api"
import { ServiceItem } from "./ServiceItem"
import { useEffect, useState } from "react"
export const Servicios = () => {
    const [ services, setServices ] = useState([]);

    const getServices = async () => {
        const data_services = await fetchServicios();

        return data_services;
    }

    useEffect(() => {
        const fetchData = async () => {
          const data = await getServices();
          setServices(data);
        };
        fetchData();
      }, []);

    return (
        
        <>
            
            <div className="page-wrapper">

			<Sidebar />
			
			<div className="main-container">
                <Header />


				<div className="content-wrapper-scroll">

					<div className="content-wrapper">

						<div className="row">
							<div className="col-sm-12 col-12">
								<div className="card">
									<div className="card-header">
										<div className="card-title">Servicios disponibles</div>
										
									</div>
									<div className="card-body">

										<div className="row">
                                              {/* Aca se irian generando los servicios disponibles */}
                                              {/* { getServices().map(service => <ServiceItem key={service.id} service={service} />)} */}
                                              { services.map(service => (
                                                <div key={service.id} className="col-xxl-6 col-sm-12 col-12">
                                                    <ServiceItem key={service.id} service={service} />
                                                </div>
                                              ) )}
											
										</div>

									</div>
								</div>
							</div>
						</div>

					</div>

					<div className="app-footer">
						<span>© Arise admin 2023</span>
					</div>

				</div>

			</div>


		</div>

        </>
    )
}