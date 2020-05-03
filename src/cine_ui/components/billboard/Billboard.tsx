import React from "react";
import "./Billboard.scss";
import Slideshow from "./Slideshow";
import Group from "./Group";
import Background from "./Background";

const Billboard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <Slideshow />
            <Group title="recently added" />
        </div>
    );
};

export default Billboard;
