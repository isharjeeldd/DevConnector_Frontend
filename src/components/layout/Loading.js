import { Fragment } from "react";

const Loading = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loading,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
    return <>
        <Fragment>
            <div style={{ height: "100vh", display: "flex", alignItems: "center" }}>
                <h3><b>Loading...</b></h3>
            </div>
        </Fragment>
    </>
}

export default Loading;