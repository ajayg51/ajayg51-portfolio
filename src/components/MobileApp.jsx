import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import HeaderLinks from '../utils/header_links';
import { useState } from 'react';
import './mobile_app.css';

import AboutMe from './content/left_pane/about_me/about_me';
import WorkExperience from './content/left_pane/work_experience/work_experience.jsx';
import Skills from './content/left_pane/skills/skills.jsx';
import Education from './content/left_pane/education/education.jsx';
import Projects from './content/left_pane/projects/projects.jsx';
import Achievements from './content/left_pane/achievements/achievements.jsx';

const HeaderButton = ({ item }) => {
    return (
        <div className='accordion-btn'>
            <p className='accordion-item'>{item}</p>
        </div>
    );
}

const AccordionContent = ({ content }) => {
    return (
        <div className='accordion-content'>
            <p className='accordion-content-value'> {content}</p>
        </div>
    );
}

const GetContentByIdx = ({ idx }) => {
    // console.log("id : " + idx);

    switch (idx) {
        case 0: return <AboutMe />;
        case 1: return <Skills />;
        case 2: return <Projects />;
        case 3: return <Education />;
        case 4: return <Achievements />;
        case 5: return <WorkExperience />;
        default: return "Nothing yet";
    }
}


const MobileApp = () => {
    const [idx, setIdx] = useState();

    const setNewIdx = (index) => {
        // console.log("i : " + index);
        setIdx(index);

    }

    // console.log("idx : " + idx);

    return (
        <div className='mobile-body'>
            <Accordion>
                {HeaderLinks.map((item, idx) => (
                    <AccordionItem key={idx} onClick={() => setNewIdx(idx)}>
                        <AccordionItemHeading>
                            <AccordionItemButton>

                                <HeaderButton item={item} />

                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <AccordionContent
                                content={<GetContentByIdx idx={idx} />}

                            />
                        </AccordionItemPanel>

                    </AccordionItem>
                ))}
            </Accordion>

        </div >

    );

}

export default MobileApp;