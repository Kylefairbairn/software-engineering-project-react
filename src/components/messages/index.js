import React from "react";
import {Route, Routes} from "react-router-dom";
import Groups from "../groups";


const Messages = () => {
    return(
        <>
            <div className={'row'}>
                <h3>Groups</h3>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Groups/>}/>
                </Routes>
            </div>
        </>
    )
};
export default Messages;