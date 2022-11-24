import negra from "../assets/negra.jpg";
import brenda from "../assets/brenda.jpg";
import pajaro from "../assets/pajaro.jpg";
import concurso from "../assets/concurso.jpeg";
import malenafoto from "../assets/malenafoto.jfif"



export const Inicio  = () => {
    
    return (
        <div className="inicio-fondo">
        <div className="inicio-div">
        <div className="inicio-textos"></div>
        <div className="gallery">
            <img src={negra} alt="" />
            <img src={brenda} alt="" />
            <img src={pajaro} alt="" />
            <img src={concurso} alt="" />
            <img src={malenafoto} alt="" />
        </div>
        </div>
        </div>
    )
}