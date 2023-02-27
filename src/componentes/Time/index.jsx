import './Time.css';

const Time = (props) => {
    const corDeFundo = {
        backgroundColor: props.colorBg
    }
    const corDestque = {
        backgroundColor: props.colorHl
    }

    return(
        <section className="time" style={corDeFundo}>
            <h3>{props.name}</h3>
            <hr style={corDestque}/>
        </section>
    );
}

export default Time;
