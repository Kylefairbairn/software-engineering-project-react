import React from "react";
import {Route, Routes} from "react-router-dom";
import Groups from "../groups";
import Chat from "../chat";


const Messages = () => {
    return(
        <>
            <div className={'row'}>
                <h3>Groups</h3>
            </div>
            <div>
                <Routes>
                    <Route path={'/'} element={<Groups/>}/>
                    <Route path={'/chat/*'} element={<Chat/>}/>
                </Routes>
            </div>
        </>
    )
};
export default Messages;