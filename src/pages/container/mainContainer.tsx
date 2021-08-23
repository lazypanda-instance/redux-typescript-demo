import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";

import { Provider } from "react-redux"
import store from "../../utility/store/store";

const MainContainer = () => {
    return (
        <Provider store={store}>
            <Header></Header>
            <Footer></Footer>
        </Provider>
    );
}

export default MainContainer;