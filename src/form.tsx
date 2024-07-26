import {useState} from "react";

let Form = () => {
    let [board, setBoard] = useState({
        title: '',
        content: ''
    })

    let {title, content} = board
    let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // handler 와의 차이는 발생했는지 본인이 직접 컨트롤 하는지의 차이가 있다.
        e.preventDefault()
        setBoard({
            title:'',
            content: ''
        })
    }

    let onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.target
        setBoard({
            ...board,
            [name]: value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <input name={title} value={title} onChange={onChange} placeholder="제목" />
            <input name={content} value={content} onChange={onChange} placeholder="내용"/>
            <button type='submit'>등록하기</button>
        </form>
    )
}

export default Form;