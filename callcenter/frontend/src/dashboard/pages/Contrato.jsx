import { Header, Sidebar } from "../components"

export const Contrato = () => {
    return (
        <>
            <div class="page-wrapper">
                <Sidebar />
                <div class="main-container">
                    <Header />

                    <div class="content-wrapper-scroll">

                        <div class="content-wrapper">

                            <div class="row">
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <label for="validationCustom01" class="form-label">adadad</label>
                                                <input type="text" class="form-control" id="validationCustom01" value="Mark" required=""/>
                                                <div class="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div>
                                                <div class="was-validated">
                                                    <label for="validationCustom02" class="form-label">Zip</label>
                                                    <input type="text" class="form-control" id="validationCustom02" required=""/>
                                                    <div class="invalid-feedback">Please provide a valid zip.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-sm-6 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <label for="validationCustom04" class="form-label">State</label>
                                                <select class="form-select" id="validationCustom04" required="">
                                                    <option selected="" disabled="" value="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                                <div class="invalid-feedback">Please select a valid state.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <label for="validationTextarea" class="form-label">Textarea</label>
                                                <textarea class="form-control is-invalid" id="validationTextarea"
                                                    placeholder="Required example textarea" required=""></textarea>
                                                <div class="invalid-feedback">Please enter a message in the textarea.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <label for="validationTextarea2" class="form-label">Textarea</label>
                                                <textarea class="form-control" id="validationTextarea2"
                                                    placeholder="Required example textarea"></textarea>
                                                <div class="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <input type="file" class="form-control" aria-label="file example" required=""/>
                                                <div class="invalid-feedback">Example invalid form file feedback</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="was-validated">
                                                <input type="file" class="form-control" aria-label="file example"/>
                                                <div class="valid-feedback">Looks good!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="form-check was-validated">
                                                <input type="checkbox" class="form-check-input" id="validationFormCheck1" required=""/>
                                                <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="form-check was-validated">
                                                <input type="checkbox" class="form-check-input" id="validationFormCheck2"/>
                                                <label class="form-check-label" for="validationFormCheck2">Check this checkbox</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="form-check was-validated">
                                                <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked"
                                                    required=""/>
                                                <label class="form-check-label" for="validationFormCheck3">Toggle this radio</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-12">
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="form-check was-validated">
                                                <input type="radio" class="form-check-input" id="validationFormCheck4" name="radio-stacked2"/>
                                                <label class="form-check-label" for="validationFormCheck4">Toggle this radio</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="app-footer">
                            <span>© Arise admin 2023</span>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}