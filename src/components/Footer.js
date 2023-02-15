import React from "react";

function Footer(props) {
    const { skills, deleteSkill, addSkill, changeSkill, submitSkill } = props;
    return (

        <footer className="footer">
            <h2 className="title">Skills</h2>
            <ul className="skills">
                {
                    skills.map(skill => {
                        return skill.isChanging ?
                            <input className="skill_isChanging" defaultValue={skill.name} id={skill.id} onKeyDown={submitSkill}></input>
                            :
                            <li className="skill" id={skill.id} key={skill.id}>
                                <p className="skill__title" id={skill.id} onClick={changeSkill}>{skill.name}</p>
                                <div className="skill__delete" onClick={deleteSkill}></div>
                            </li>
                    })
                }
                <li className="skill_add jsAddSkill"><button className="skill__button" onClick={addSkill}>+</button></li>
            </ul>
        </footer>
    )
}

export default Footer