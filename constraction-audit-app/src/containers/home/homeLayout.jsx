import React from "react";
import { Link, Navigate, useOutlet } from "react-router-dom";


const HomeLayout = ()=>{
    const outlet = useOutlet();

    return (
        <div>
            <div>HOem Layout</div>
            <div>
                <outlet />
            </div>
        </div>
    )
}

export default HomeLayout;