import {useState} from 'react';
import Popup from './Popup'
import MemoLeft from './memoLeft'
import MemoRight from './memoRight'
import './App.scss';


function App() {

  const [search, setSearch] = useState('')
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const [memoList, setMemoList] = useState([])
  const [Edit , setEdit] = useState(false)
  const [onSelectedId, setOnSelectedId] = useState(null)
  const [style, setStyle ] = useState({display: 'none'})
  const [isDelete, setIsDelete ] = useState(false)

  const searchMemo = (text) => {
    setSearch(text)
  }

  const changeTitle = (text) => {
    setTitle(text)
  }

  const changeContents = (text) => {
    setContents(text)
  }

   const saveMemo = () => {
    const today = new Date();
    const rand = Math.random();
   

    if (onSelectedId === null) {
      const tmp = {id:rand, memoTitle: title, memoContent: contents, year:today.getFullYear(), month: today.getMonth() +1,
        day:today.getDate(), hour:today.getHours(), minute:today.getMinutes(), second:today.getSeconds()}   
    
      setMemoList([tmp, ...memoList])
      setTitle('')
      setContents('')
      setEdit(false)
    } else {
      const tmp = memoList.filter((memo) => memo.id !== onSelectedId)
      const tmp2 = {id: onSelectedId, memoTitle: title, memoContent: contents, year:today.getFullYear(), month:today.getMonth() +1,
        day:today.getDate(), hour:today.getHours(), minute:today.getMinutes(), second:today.getSeconds()}
      tmp.unshift(tmp2)
      setMemoList(tmp)
      setEdit(true)
      setStyle({display: 'inline'})
    }
  }

  const createNewMemo = () => {
    setTitle('')
    setContents('')
    setStyle({display: 'none'})
    setEdit(false)
    setOnSelectedId(null)
  }


  const selectMemo = (memo) => {
    setOnSelectedId(memo.id)
    setTitle(memo.memoTitle)
    setContents(memo.memoContent)
    setEdit(true)
    setStyle({display: 'inline'})
  }

  const deleteMemo = () => {
    let tmpArray = []
    tmpArray = memoList.filter((memo) => memo.id !== onSelectedId)
    setMemoList(tmpArray)
    setTitle('')
    setContents('')
    setEdit(false)
    setStyle({display: 'none'})
    setIsDelete(false)
  }
 

  const memoEdit = () => {
    setEdit(false)
  }

  const isDeletePopup = () => {
    setIsDelete(true)
  }



  return (
    <div className="MEMO">
       
      <div className="memoCenter">
          {/** HTML 적는 곳 */}
          {/****  메모왼쪽 part ****/}
          <div className='memolist'>
             {<MemoLeft createNewMemo={createNewMemo} searchMemo={searchMemo} memoList={memoList} search={search}
             selectMemo={selectMemo}  onSelectedId={onSelectedId}/>}
          </div>
          {/**** 메모오른쪽 part ****/}
          <div className='memowrite'>
              {isDelete === true ? <Popup isDelete={setIsDelete} memoDelete={deleteMemo} /> : null}
              {<MemoRight style={style} isDeletePopup={isDeletePopup} memoEdit={memoEdit} saveMemo={saveMemo}
              changeTitle={changeTitle} Edit={Edit} title={title} changeContents={changeContents} contents={contents}/>}
          </div>
      </div>
    </div>
  );
}

export default App;
