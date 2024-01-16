import '../../css/content.css';
import '../../assets/Assets';
import Assets from '../../assets/Assets';

const RightPane = ()=>{
    return <>
        <div className='right-pane'>
            <div className='avatar'>
                <img src="../images/avatar.jpeg" alt='myAvatar' onError={Assets.noImg}></img>
                {/* <p>Hello</p> */}
            </div>


        </div>
    </>
}

export default RightPane;