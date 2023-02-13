import React, { Component } from "react";
import Experience from "./Experience";
import Education from "./Education";

class Main extends Component {
    constructor(props) {
        super();
    }

    render() {
        const { workPlaces, isChanging, setIsChanging, submitChanges, educationPlaces } = this.props;
        return (
            <main className="main">
                <Experience workPlaces={workPlaces} isChanging={isChanging.workPlacesIsChanging} setIsChanging={setIsChanging} submitChanges={submitChanges} />
                <Education workPlaces={workPlaces} isChanging={isChanging.educationIsChanging} setIsChanging={setIsChanging} submitChanges={submitChanges} educationPlaces={educationPlaces} />
            </main>
        )
    }
}

export default Main 