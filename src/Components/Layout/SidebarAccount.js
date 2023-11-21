import { Link } from "react-router-dom"


function SidebarAccount() {
    return (
        <div className="left-sidebar">
            <h2>Account</h2>
            <div className="panel-group category-products" id="accordian">
                {/*category-productsr*/}
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                        <Link to="/account"> account</Link>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">

                            <Link to="/account/product/list"> My product</Link>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">

                            <Link to="/account/product/add"> Add product</Link>
                        </h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">

                            <Link to="/account/product/edit">Edit product</Link>
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default SidebarAccount