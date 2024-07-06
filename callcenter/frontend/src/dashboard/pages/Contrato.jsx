import { Header, Sidebar } from "../components"

export const Contrato = () => {
    return (
        <>
            <div className="page-wrapper">
                <div className="main-container">

                    <div className="content-wrapper-scroll">

                        <div className="content-wrapper">

                            <div className="row">
                               
                                <div className="col-sm-6 col-12">
                                <div classNameName="card-header">
                                            <div className="card-title">Crear contrato</div>
                                    </div>
                                    <div className="card">
                                   
                                        <div className="card-body">
                                            <div>
                                                <div className="was-validated">
                                                    <label for="validationCustom02" className="form-label">Numero cuenta</label>
                                                    <input type="text" className="form-control" id="validationCustom02" required=""/>
                                                    <div className="invalid-feedback">Ingrese el numero de cuenta del usuario</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-sm-6 col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="was-validated">
                                                <label for="validationCustom04" className="form-label">Plan</label>
                                                <select className="form-select" id="validationCustom04" required="">
                                                    <option selected="" disabled="" value="">Choose...</option>
                                                    <option value="5">NetHelp Max</option>
                                                    <option value="4">NetHelp Ultra</option>
                                                    <option value="3">NetHelp Super</option>
                                                    <option value="2">NetHelp Family</option>
                                                    <option value="1">NetHelp Express</option>
                                                </select>
                                                <div className="invalid-feedback">Please select a valid state.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div classNameName="col-sm-12 col-12">
                                    <button type="submit" classNameName="btn btn-primary">Crear contrato</button>
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