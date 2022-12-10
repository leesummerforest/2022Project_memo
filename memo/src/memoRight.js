import './App.scss';
import asset from './img' 




function memoRight ({style, isDeletePopup, memoEdit, saveMemo, changeTitle, Edit, title, changeContents, contents}) {


    return (
        <div className='memowrite_width'  alt='object영역'>
        {/* 메모 작성하는 part 상단오른쪽 아이콘3개 */}
           <div className='memowrite_icon'>
             <span className='trash' style={style} onClick={isDeletePopup}> <img src={asset.trash}  alt='휴지통'  /></span>
             <span className='edit' style={style} onClick={memoEdit}><img src={asset.edit} alt='수정'  /></span>
             <span onClick={saveMemo}><img src={asset.save} alt='저장'  /></span>
           </div>

         {/* 메모 작성하는 part 타이틀, 내용 */}
          <div className='memowrite_part'>
             <input
               onChange={e => changeTitle(e.target.value)}
               disabled={Edit}
               className='memowrite_title'
               placeholder='제목을 입력하세요'
               value={title}
             />
             <textarea
               onChange={e => changeContents(e.target.value)}
               disabled={Edit}
               className='memowrite_detail'
               placeholder='메모를 입력하세요'
               value={contents}
             />
           </div>
       </div>
       
    )
}

export default memoRight