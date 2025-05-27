import sunshareteam from "../../assets/img/about/sunshare_team.JPG";
import project_lead from "../../assets/img/about/coreteam/project_lead.png";
import programmer from "../../assets/img/about/coreteam/programmer.png";
import proj_devt_offr from "../../assets/img/about/coreteam/proj_devt_offr.png";
import proj_devt from "../../assets/img/about/coreteam/proj_devt.png";
import project_engr from "../../assets/img/about/coreteam/project_engr.png";
import React, { useState } from "react";
import { useEffect } from "react";
import OverheadButton from "./OverheadButton";
import CoreInformation from "./CoreInformation";

const CoreSection = () => {
  const getPositionInImage = (pxLocation, pyLocation) => {
    const imgElem = document.querySelector("#sunshare_team_img");
    const cw = imgElem.clientWidth;
    const ch = imgElem.clientHeight;
    const iw = imgElem.naturalWidth;
    const ih = imgElem.naturalHeight;

    const x = (pxLocation * cw) / iw;
    const y = (pyLocation * ch) / ih;

    //Viewport width unit (vw) = 100 * (Pixel Unit Size / Viewport width)
    const vw = 100 * (x / window.innerWidth);
    const vy = 100 * (y / window.innerHeight);
    return [vw, vy];
  };

  const [teamImagesPosition, setImagePosition] = useState({
    firstPosition: [0, 0],
    secondPosition: [0, 0],
    thirdPosition: [0, 0],
    fourthPosition: [0, 0],
    fifthPosition: [0, 0],
  });

  //
  useEffect(() => {
    setImagePosition({
      firstPosition: [getPositionInImage(3800, 970)],
      secondPosition: getPositionInImage(3154, 1017),
      thirdPosition: getPositionInImage(2520, 1130),
      fourthPosition: getPositionInImage(1796, 1029),
      fifthPosition: getPositionInImage(1100, 1029),
    });
  }, []);

  const getNaturalHeightAndWidth = (event) => {
    const imgElem = document.querySelector("#sunshare_team_img");
    const bounds = imgElem.getBoundingClientRect();
    const left = bounds.left;
    const top = bounds.top;
    const x = event.pageX - left - window.scrollX;
    const y = event.pageY - top - window.scrollY;
    const cw = imgElem.clientWidth;
    const ch = imgElem.clientHeight;
    const iw = imgElem.naturalWidth;
    const ih = imgElem.naturalHeight;
    const px = (x / cw) * iw;
    const py = (y / ch) * ih;
    const x2 = (px * cw) / iw;

    return [px, py];
  };

  const [image, setImage] = useState({});

  const initialPerson = {
    proj_devt_offr: false,
    proj_devt: false,
    project_lead: false,
    programmer: false,
    project_engr: false,
  };

  const [person, setPerson] = useState(initialPerson);

  const initialValues = {
    name: "",
    title: "",
    contact: "",
    email: "",
  };

  const [text, setText] = useState(initialValues);

  const teamInfo = [
    [
      "Rodney A. Doyaoen",
      "Project Development Officer",
      "+639433490231",
      "radoyaoen@uc-bcf.edu.ph",
    ],
    [
      "Sophia Marie F. Arellano",
      "Project Development Officer",
      "+639245470231",
      "sfarellano@uc-bcf.edu.ph",
    ],
    [
      "Dr. Thelma D. Palaoag",
      "Project Leader",
      "+639456712357",
      "tdpalaoag@uc-bcf.edu.ph",
    ],
    [
      "Earl P. Siachongco",
      "Project Computer Programmer",
      "+639754231562",
      "epsiachongco@uc-bcf.edu.ph",
    ],
    [
      "Michael James Deus",
      "Project Staff",
      "+639798542345",
      "mjdeus@uc-bcf.edu.ph",
    ],
  ];

  function getText() {
    let counter = 0;
    for (let key in initialPerson) {
      if (initialPerson[key] == true) {
        break;
      }
      counter += 1;
    }
    let newText = {
      name: teamInfo[counter][0],
      title: teamInfo[counter][1],
      contact: teamInfo[counter][2],
      email: teamInfo[counter][3],
    };
    setText(newText);
  }

  function handleChange(picture, who) {
    initialPerson[who] = !initialPerson[who];
    setImage(picture);
    setPerson(initialPerson);
    getText();
  }

  return (
    <div className="w-full flex flex-col dark:bg-[#243447] justify-items-center align-items-center">
      <div className="mt-[8vh]">
        <h4 className="font-Space-Grotesk font-black text-amber-500 text-center xl:text-[20px]">
          — Team —
        </h4>
        <h1 className="w-full font-Space-Grotesk font-black text-center xl:text-[30px]">
          The Sunshare Team
        </h1>
      </div>

      <div className="mx-auto relative">
        <div
          className="relative drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
          onClick={getNaturalHeightAndWidth}>
          <img
            id="sunshare_team_img"
            src={sunshareteam}
            className="w-[100vw] h-auto"
            alt="acquisition"
            onLoad={() => {
              setImagePosition({
                firstPosition: getPositionInImage(3800, 870),
                secondPosition: getPositionInImage(3154, 917),
                thirdPosition: getPositionInImage(2520, 1030),
                fourthPosition: getPositionInImage(1796, 929),
                fifthPosition: getPositionInImage(1100, 929),
              });
            }}
          />

          <OverheadButton
            leftPos={`${teamImagesPosition.firstPosition[0]}`}
            topPos={`${teamImagesPosition.firstPosition[1]}`}
            handleChange={() => handleChange(project_engr, "project_engr")}
          />

          <OverheadButton
            leftPos={`${teamImagesPosition.secondPosition[0]}`}
            topPos={`${teamImagesPosition.secondPosition[1]}`}
            handleChange={() => handleChange(programmer, "programmer")}
          />

          <OverheadButton
            leftPos={`${teamImagesPosition.thirdPosition[0]}`}
            topPos={`${teamImagesPosition.thirdPosition[1]}`}
            handleChange={() => handleChange(project_lead, "project_lead")}
          />

          <OverheadButton
            leftPos={`${teamImagesPosition.fourthPosition[0]}`}
            topPos={`${teamImagesPosition.fourthPosition[1]}`}
            handleChange={() => handleChange(proj_devt, "proj_devt")}
          />

          <OverheadButton
            leftPos={`${teamImagesPosition.fifthPosition[0]}`}
            topPos={`${teamImagesPosition.fifthPosition[1]}`}
            handleChange={() => handleChange(proj_devt_offr, "proj_devt_offr")}
          />
        </div>
      </div>

      <CoreInformation text={text} image={image} />
    </div>
  );
};

export default CoreSection;
