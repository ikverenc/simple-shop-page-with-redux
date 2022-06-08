import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.router";
import Home from "./routes/home/home.route";
import Shop from "./routes/shop/shop.route";
import Checkout from "./routes/checkout/checkout.route";
import Authentication from "./routes/authentication/authentication.route";

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
