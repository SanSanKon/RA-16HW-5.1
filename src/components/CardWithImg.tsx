import { ReactNode } from "react";
import "../App.css";

type Props = {
    img: string | undefined;
    title: ReactNode;
    paragraph: ReactNode;
    link: ReactNode;
}

const CardWithImg: React.FC<Props> = (children: Props) => {
    return (
            (!children.img) ? 
            (<div className="cardContainer">
                <div className="textContainer">
                    <h2>{children.title}</h2>
                    <p>{children.paragraph}</p>
                    <a href="">{children.link}</a>
                </div> 
            </div>) : 
            (<div className="cardContainer">
                <img src={children.img} />
                <div className="textContainer">
                    <h2>{children.title}</h2>
                    <p>{children.paragraph}</p>
                    <a href="">{children.link}</a>
                </div> 
            </div>)
    )
}

export default CardWithImg;