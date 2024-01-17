import '../../css/content.css';
import Assets from "../../assets/Assets";
import LeftPane  from './LeftPane';
import RightPane  from './RightPane';

const Content = ()=>{
    return <>
    <div className='content'>
        <LeftPane></LeftPane>
        <RightPane assetImg={Assets.avatar}></RightPane>
    </div>
    </>
}

export default Content;