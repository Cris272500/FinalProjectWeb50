import { Link } from "react-router-dom";
import "../../assets/dashboard/css/nucleo-icons.css";
import "../../assets/dashboard/css/nucleo-svg.css";

import "../../assets/dashboard/js/script";

import { LoginForm, LoginNavbar } from "../components"

export const Login = () => {
  return (
    <>
    
        <LoginNavbar />

        <main className="main-content  mt-0">
            <section>
                <div className="page-header min-vh-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                                <div className="card card-plain">
                                    <div className="card-header pb-0 text-start">
                                        <h4 className="font-weight-bolder">Inicia sesión</h4>
                                        <p className="mb-0">Ingresa tu nombre de usuario y contraseña.</p>
                                    </div>
                                    <div className="card-body">
                                        <LoginForm />
                                    </div>
                                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                        <p className="mb-4 text-sm mx-auto">
                                            ¿Aún no tienes una cuenta?
                                            <Link to="/register" className="ms-1 text-primary text-gradient font-weight-bold">Registrarse</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                                <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg')",
                            backgroundSize: "cover"}}>
                                    <span className="mask bg-gradient-primary opacity-6"></span>
                                    <h4 className="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
                                    <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}
