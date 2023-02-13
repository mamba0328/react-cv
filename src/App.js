import './css/App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super()

    this.state = {
      // header
      fname: 'Dzhezhulei Valentyn',
      title: "Fronten Developer",
      email: 'valentindjejyley@gmail.com',
      residence: 'Kiev, Ukraine',
      ////////////////////////////////////
      //main
      workPlaces: [
        {
          company: 'le Silpo',
          title: 'Front-end developer',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
          year: 2020,
          id: uniqid(),
        },
        {
          company: 'le Silpo',
          title: 'Front-end developer',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
          year: 2021,
          id: uniqid(),
        },
        {
          company: 'le Silpo',
          title: 'Front-end developer',
          desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
          year: 2022,
          id: uniqid(),
        },
      ],
      educationPlaces: [{
        name: 'Nepal Police School',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
        year: 2015,
        id: uniqid(),
      },
      {
        name: 'Nepal Police School',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
        year: 2015,
        id: uniqid(),
      },
      {
        name: 'Nepal Police School',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, here.',
        year: 2015,
        id: uniqid(),
      },],
      skills: [
        {
          name: 'Three.js',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'React.js',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'GSAP',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'Webflow',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'Spline.design',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'SEO',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'Figma',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'Blender',
          id: uniqid(),
          isChanging: false,
        },
        {
          name: 'Vue.js',
          id: uniqid(),
          isChanging: false,
        },],

      isChanging: {
        headerIsChanging: false,
        workPlacesIsChanging: false,
        educationIsChanging: false,
      }
    }
  }

  setIsChanging = (e) => {
    const classesOfTarget = String(e.target.className);
    console.log(classesOfTarget)
    if (classesOfTarget.includes('jsHead')) {
      this.setState({
        isChanging: {
          headerIsChanging: true,
          workPlacesIsChanging: false,
          educationIsChanging: false,
        }
      })
    } else if (classesOfTarget.includes('jsWorkPlaces')) {
      this.setState({
        isChanging: {
          headerIsChanging: false,
          workPlacesIsChanging: true,
          educationIsChanging: false,
        }
      })
    } else if (classesOfTarget.includes('jsEducation')) {
      this.setState({
        isChanging: {
          headerIsChanging: false,
          workPlacesIsChanging: false,
          educationIsChanging: true,
        }
      })
    }
  }

  submitChanges = (e) => {

    if (e.key !== 'Enter') {
      return
    }

    const classesOfTarget = String(e.target.className);
    if (classesOfTarget.includes('jsHeader')) {
      this.setState(
        {
          fname: document.getElementById('jsFName').value,
          title: document.getElementById('jsTitle').value,
          email: document.getElementById('jsEmail').value,
          residence: document.getElementById('jsResidence').value,
          isChanging: {
            headerIsChanging: false,
            workPlacesIsChanging: false,
            educationIsChanging: false,
          }
        }
      )
    } else if (classesOfTarget.includes('jsExperience')) {
      const places = this.state.workPlaces
      const newWorkPlaces = [];
      places.forEach((place, i = 0) => {
        const lists = document.querySelectorAll(`#${place.id}`);
        const desc = lists[0].children[0];
        const company = lists[0].children[1];
        const title = lists[0].children[2];
        const year = lists[1].children[0];

        newWorkPlaces.push({
          company: company.value,
          title: title.value,
          desc: desc.value,
          year: year.value,
          id: uniqid(),
        })
      })

      this.setState(
        {
          workPlaces: newWorkPlaces,
          isChanging: {
            headerIsChanging: false,
            workPlacesIsChanging: false,
            educationIsChanging: false,
          }
        }
      )
    } else if (classesOfTarget.includes('jsEducation')) {
      const places = this.state.educationPlaces

      const newEducation = [];
      places.forEach((place, i = 0) => {
        const lists = document.querySelectorAll(`#${place.id}`);
        const desc = lists[0].children[0];
        const name = lists[0].children[1];
        const year = lists[1].children[0];

        newEducation.push({
          name: name.value,
          desc: desc.value,
          year: year.value,
          id: uniqid(),
        })
      })

      this.setState(
        {
          educationPlaces: newEducation,
          isChanging: {
            headerIsChanging: false,
            workPlacesIsChanging: false,
            educationIsChanging: false,
          }
        }
      )
    }
  }

  addSkill = () => {
    const skillsDuble = this.state.skills.slice()
    skillsDuble.push({
      name: 'Your Skill',
      id: uniqid(),
      isChanging: false,
    })

    this.setState(
      {
        skills: skillsDuble,
      }
    )
  }

  changeSkill = (e) => {
    const changeSkillId = e.target.id;
    const skillsDuble = this.state.skills.slice();
    skillsDuble.map(skill => {
      skill.isChanging = false;
      if (skill.id === changeSkillId) {
        skill.isChanging = true;
      }
    })
    console.log(skillsDuble)
    this.setState(
      {
        skills: skillsDuble,
      }
    )
  }

  submitSkill = (e) => {
    if (e.key !== 'Enter') {
      return
    }

    const skillsDuble = this.state.skills.map((skill) => {
      return skill.isChanging ?
        skill = {
          name: document.getElementById(`${skill.id}`).value,
          id: skill.id,
          isChanging: false,
        }
        : skill
    })
    console.log(skillsDuble)
    this.setState({
      skills: skillsDuble,
    })
  }

  deleteSkill = (e) => {
    const deleteId = e.target.parentElement.id
    const filteredSkills = this.state.skills.filter(skill => {
      if (skill.id !== deleteId) {
        return skill
      }
    })

    console.log(filteredSkills);

    this.setState(
      {
        skills: filteredSkills,
      }
    )
  }

  render() {
    let state = this.state
    return (
      <div className="App" onKeyDown={this.submitChanges}>
        <Header fname={state.fname} title={state.title} email={state.email} residence={state.residence} isChanging={state.isChanging.headerIsChanging} setIsChanging={this.setIsChanging} submitChanges={this.submitChanges} />
        <Main workPlaces={state.workPlaces} isChanging={state.isChanging} setIsChanging={this.setIsChanging} submitChanges={this.submitChanges} educationPlaces={state.educationPlaces} />
        <Footer skills={state.skills} deleteSkill={this.deleteSkill} addSkill={this.addSkill} changeSkill={this.changeSkill} submitSkill={this.submitSkill} />
      </div>
    );
  }

}

export default App;
