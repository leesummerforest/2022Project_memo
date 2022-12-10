import './Popup.scss';

function Popup ({isDelete, memoDelete}) {

    return (
        <div className='popupBg' >
             <div className='popupBox_delete'>
                <div className='popupTitle'>정말로 삭제하시겠습니까?</div>
                <div className='popupButton'><span className='yes' onClick={memoDelete}>예</span>
                <span className='no' onClick={() => isDelete(false) }>아니요</span></div>
            </div>

            {/* <div className='popupBox_edit'>
                <div className='popupTitle'>정말로 수정하시겠습니까?</div>
                <div className='popupButton'><span className='yes'>예</span><span className='no'>아니요</span></div>
            </div> */}
        </div>
       
    )
}

export default Popup