import '../../css/content.css';
import LeftPane  from './LeftPane';
import RightPane  from './RightPane';

const Content = ()=>{
    return <>
    <div className='content'>
        <LeftPane></LeftPane>
        <RightPane></RightPane>
    </div>
    </>
}

export default Content;