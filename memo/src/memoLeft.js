import asset from './img'       
import './App.scss';

function memoLeft ({createNewMemo,searchMemo,memoList,search,selectMemo,onSelectedId}) {


    return (
        
                    <div className='memolist_width'  alt='object영역'>

                    {/* 메모, 추가 part */}
                        <div className='main_t'>
                        <span className='main_t_memo'>메모</span>
                        <span  className='main_t_add' onClick={createNewMemo}><img src={asset.add} alt='새롭게추가'  /></span>
                        </div>

                    {/* 검색 part */}
                        <div className='search'>
                        <div className='search_text'>
                            <span className='search_text_icon'><img src={asset.search} alt='검색' className='search_img' /></span>
                            <input onChange={e => searchMemo(e.target.value)} className='search_text_text' placeholder='검색'/>
                        </div>
                        </div>

                        <div className='memolist'>
                        {/* 저장된 메모 리스트 part */}
                        {
                            memoList.length > 0 ? (
                            search === '' ? 
                                memoList.map((memo) => {
                                return (
                                    <div className='memolist_save' onClick={() => selectMemo(memo)}> {/** ${} */}
                                        <div className={onSelectedId === memo.id ? 'memo_save_click' : 'memo_save_unclick'}>
                                            <div className='memo_save_title' >
                                                <div className="memo_save_real_title"> {memo.memoTitle === '' ? '제목없음' : memo.memoTitle} </div>
                                                <div className="memo_save_date">{memo.year + '.' + memo.month + '.'+ memo.day+ ' ' + memo.hour+ ':' +memo.minute}</div>
                                            </div>
                                        </div>
                                    </div>  
                                )
                                })
                                :
                                memoList.filter(memo => memo.memoTitle.includes(search)).map((memo) => {
                                    return (
                                    <div className='memolist_save' onClick={() => selectMemo(memo)}> {/** ${} */}
                                        <div className={onSelectedId === memo.id ? 'memo_save_click' : 'memo_save_unclick'}>
                                            <div className='memo_save_title' >
                                                <div className="memo_save_real_title"> {memo.memoTitle === '' ? '제목없음' : memo.memoTitle} </div>
                                                <div className="memo_save_date">{memo.year + '.' + memo.month + '.'+ memo.day+ ' ' + memo.hour+ ':' +memo.minute}</div>
                                            </div>
                                        </div>
                                    </div> 
                                    )
                                })
                            ) : <div className='memolist_save'>
                                    <div className='nomemo'>메모 없음</div>
                                </div>
                        }
                        </div>

                        {/* 저장된 메모갯수 part */}
                        <div className='memoNumber'>
                            {/* {memoList.length}개의 메모 */}
                            {search === '' ?
                                memoList.length+'개의 메모' : memoList.filter(memo => memo.memoTitle.includes(search)).map((memo) => {
                                return (
                                    <div className='memolist_save' onClick={() => selectMemo(memo)}> {/** ${} */}
                                        <div className={onSelectedId === memo.id ? 'memo_save_click' : 'memo_save_unclick'}>
                                            <div className='memo_save_title' >
                                                <div className="memo_save_real_title"> {memo.memoTitle === '' ? '제목없음' : memo.memoTitle} </div>
                                                <div className="memo_save_date">{memo.year + '.' + memo.month + '.'+ memo.day+ ' ' + memo.hour+ ':' +memo.minute}</div>
                                            </div>
                                        </div>
                                    </div> 
                                )
                                }).length +'개의 메모'}
                        </div>
                    </div>
       
    )
}

export default memoLeft