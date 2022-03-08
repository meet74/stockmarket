import './style.css'



const Input = ({title='', onInputChange}) => {
    return(
        <section>
            <h4>{title}</h4>
            <div >
                <input placeholder="E-mail" onChangeCapture={onInputChange} style={{borderWidth:0.1}}/>
            </div>
        </section>
    )
}

export default Input