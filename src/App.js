import './css/App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/main/Main';
import Footer from './components/Footer';
import uniqid from "uniqid";

function App() {
  const [fname, setFname] = useState('Dzhezhulei Valentyn');
  const [title, setTitle] = useState('Fronten Developer');
  const [email, setEmail] = useState('valentindjejyley@gmail.com');
  const [residence, setResidence] = useState('Kiev, Ukraine');

  const [workPlaces, setWorkPlaces] = useState([
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
  ]);

  const [educationPlaces, setEducationPlaces] = useState([{
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
  }]);

  const [skills, setSkills] = useState([{
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
  }]);

  const [isChanging, setIsChanging] = useState({
    headerIsChanging: false,
    workPlacesIsChanging: false,
    educationIsChanging: false,
  });


  function setIsChangingOnClick(e) {
    const classesOfTarget = String(e.target.className);

    if (classesOfTarget.includes('jsHead')) {
      setIsChanging({
        headerIsChanging: true,
        workPlacesIsChanging: false,
        educationIsChanging: false,
      })
    } else if (classesOfTarget.includes('jsWorkPlaces')) {
      setIsChanging({
        headerIsChanging: false,
        workPlacesIsChanging: true,
        educationIsChanging: false,
      })
    } else if (classesOfTarget.includes('jsEducation')) {
      setIsChanging({
        headerIsChanging: false,
        workPlacesIsChanging: false,
        educationIsChanging: true,
      })
    }
  }

  function submitChanges(e) {

    if (e.key !== 'Enter') {
      return
    }

    const classesOfTarget = String(e.target.className);
    if (classesOfTarget.includes('jsHeader')) {
      setFname(document.getElementById('jsFName').value);
      setTitle(document.getElementById('jsTitle').value);
      setEmail(document.getElementById('jsEmail').value);
      setResidence(document.getElementById('jsResidence').value);
      setIsChanging({
        headerIsChanging: false,
        workPlacesIsChanging: false,
        educationIsChanging: false,
      })
    } else if (classesOfTarget.includes('jsExperience')) {
      const places = workPlaces
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
      setWorkPlaces(newWorkPlaces);
      setIsChanging({
        headerIsChanging: false,
        workPlacesIsChanging: false,
        educationIsChanging: false,
      });
    } else if (classesOfTarget.includes('jsEducation')) {
      const places = educationPlaces

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

      setEducationPlaces(newEducation);
      setIsChanging({
        headerIsChanging: false,
        workPlacesIsChanging: false,
        educationIsChanging: false,
      });
    }
  }

  function addSkill() {
    const skillsDuble = skills.slice()
    skillsDuble.push({
      name: 'Your Skill',
      id: uniqid(),
      isChanging: false,
    })

    setSkills(skillsDuble);
  }

  function changeSkill(e) {
    const changeSkillId = e.target.id;
    const skillsDuble = skills.slice();
    skillsDuble.map(skill => {
      skill.isChanging = false;
      if (skill.id === changeSkillId) {
        skill.isChanging = true;
      }
    })
    setSkills(skillsDuble);
  }

  function submitSkill(e) {
    if (e.key !== 'Enter') {
      return
    }

    const skillsDuble = skills.map((skill) => {
      return skill.isChanging ?
        skill = {
          name: document.getElementById(`${skill.id}`).value,
          id: skill.id,
          isChanging: false,
        }
        : skill
    })
    setSkills(skillsDuble);
  }

  function deleteSkill(e) {
    const deleteId = e.target.parentElement.id
    const filteredSkills = skills.filter(skill => {
      if (skill.id !== deleteId) {
        return skill
      }
    })

    setSkills(filteredSkills);
  }

  return (
    <div className="App" onKeyDown={submitChanges}>
      <Header fname={fname} title={title} email={email} residence={residence} isChanging={isChanging.headerIsChanging} setIsChanging={setIsChangingOnClick} submitChanges={submitChanges} />
      <Main workPlaces={workPlaces} isChanging={isChanging} setIsChanging={setIsChangingOnClick} submitChanges={submitChanges} educationPlaces={educationPlaces} />
      <Footer skills={skills} deleteSkill={deleteSkill} addSkill={addSkill} changeSkill={changeSkill} submitSkill={submitSkill} />
    </div>
  );
}


export default App;
