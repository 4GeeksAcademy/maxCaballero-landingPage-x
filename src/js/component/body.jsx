import React from "react";
import Jumbotron from './jumbotron.jsx';
import Card from './card.jsx';

function Body() {
    return (
        <div className="col-md-10 m-auto">
            <Jumbotron />
            <div className="col-md d-flex flex-row justify-content-center align-items-center">
                <Card
                    img="f1"
                    alt="foto01"
                    name="max"
                    post="oficina"
                    note="v dkjd kfdkfskfd lkf sjl fjdsfsdjfsdlfjsdlif sfs jsldfs"
                />
                <Card
                    img="f2"
                    alt="foto02"
                    name="max"
                    post="oficina"
                    note="v dkjd kfdkfskfd lkf sjl fjdsfsdjfsdlfjsdlif sfs jsldfs"
                />
                <Card
                    img="f3"
                    alt="foto03"
                    name="max"
                    post="oficina"
                    note="v dkjd kfdkfskfd lkf sjl fjdsfsdjfsdlfjsdlif sfs jsldfs"
                />
                <Card
                    img="f4"
                    alt="foto04"
                    name="max"
                    post="oficina"
                    note="v dkjd kfdkfskfd lkf sjl fjdsfsdjfsdlfjsdlif sfs jsldfs"
                />
            </div>
        </div>
    )
}
export default Body;