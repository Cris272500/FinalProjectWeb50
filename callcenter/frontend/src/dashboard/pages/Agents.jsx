import { Header, Sidebar } from "../components"

export const Agents = () => {
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
                                        <div className="card-title">Customers</div>
                                    </div>
                                    <div className="card-body">

                                        <div className="table-responsive">
                                            <table className="table v-middle m-0">
                                                <thead>
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Customer</th>
                                                        <th>Contact</th>
                                                        <th>Status</th>
                                                        <th>Orders</th>
                                                        <th>Last Order</th>
                                                        <th>Amount</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/4x3/ca.svg" className="flag-img-lg"
                                                                alt="Best Admin Dashboards" />
                                                            Canada
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user2.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Dolly Winters</div>
                                                                    <p>ID: #Arise00763</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>067-676-98320</td>
                                                        <td>
                                                            <span className="badge shade-green min-70">Active</span>
                                                        </td>
                                                        <td>87</td>
                                                        <td>2022/01/25</td>
                                                        <td>$32800</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/jp.svg" className="flag-img-lg" alt="Clean Dashboards" />
                                                            Japan
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user5.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Cedric Kelly</div>
                                                                    <p>ID: #Arise00582</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>009-543-77650</td>
                                                        <td>
                                                            <span className="badge shade-green min-70">Active</span>
                                                        </td>
                                                        <td>34</td>
                                                        <td>2022/01/22</td>
                                                        <td>$65890</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/us.svg" className="flag-img-lg" alt="Clean Dashboards" />
                                                            United States
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Tiya Davidson</div>
                                                                    <p>ID: #Arise00554</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>067-676-98320</td>
                                                        <td>
                                                            <span className="badge shade-green min-70">Active</span>
                                                        </td>
                                                        <td>21</td>
                                                        <td>2022/01/10</td>
                                                        <td>$25678</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/tr.svg" className="flag-img-lg" alt="Modern Dashboards" />
                                                            Turkey
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user4.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Zozi Williams</div>
                                                                    <p>ID: #Arise00831</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>002-434-66659</td>
                                                        <td>
                                                            <span className="badge shade-green min-70">Active</span>
                                                        </td>
                                                        <td>55</td>
                                                        <td>2022/01/21</td>
                                                        <td>$24571</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/in.svg" className="flag-img-lg" alt="Google Dashboards" />
                                                            India
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user3.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Karan Kumar</div>
                                                                    <p>ID: #Arise00987</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>030-998-03437</td>
                                                        <td>
                                                            <span className="badge shade-green min-70">Active</span>
                                                        </td>
                                                        <td>61</td>
                                                        <td>2021/09/18</td>
                                                        <td>$12309</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/br.svg" className="flag-img-lg" alt="Admin Panels" />
                                                            Brazil
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user6.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Lilly Desmet</div>
                                                                    <p>ID: #Arise00987</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>030-998-03437</td>
                                                        <td>
                                                            <span className="badge shade-red min-70">Blocked</span>
                                                        </td>
                                                        <td>61</td>
                                                        <td>2021/09/18</td>
                                                        <td>$12309</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/flags/1x1/it.svg" className="flag-img-lg" alt="Google Dashboards" />
                                                            Italy
                                                        </td>
                                                        <td>
                                                            <div className="media-box">
                                                                <img src="assets/images/user7.png" className="media-avatar" alt="Bootstrap Themes" />
                                                                <div className="media-box-body">
                                                                    <div className="text-truncate">Tiya Nixon</div>
                                                                    <p>ID: #Arise00987</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>030-998-03437</td>
                                                        <td>
                                                            <span className="badge shade-red min-70">Blocked</span>
                                                        </td>
                                                        <td>61</td>
                                                        <td>2021/09/18</td>
                                                        <td>$12309</td>
                                                        <td>
                                                            <div className="actions">
                                                                <a href="#" className="viewRow" data-bs-toggle="modal" data-bs-target="#viewRow">
                                                                    <i className="bi bi-list text-green"></i>
                                                                </a>
                                                                <a href="#" className="deleteRow">
                                                                    <i className="bi bi-trash text-red"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
