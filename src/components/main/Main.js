import React from "react";
import Experience from "./Experience";
import Education from "./Education";

function Main(props) {

    const { workPlaces, isChanging, setIsChanging, submitChanges, educationPlaces } = props;
    return (
        <main className="main">
            <Experience workPlaces={workPlaces} isChanging={isChanging.workPlacesIsChanging} setIsChanging={setIsChanging} submitChanges={submitChanges} />
            <Education workPlaces={workPlaces} isChanging={isChanging.educationIsChanging} setIsChanging={setIsChanging} submitChanges={submitChanges} educationPlaces={educationPlaces} />
        </main>
    )

}

export default Main 