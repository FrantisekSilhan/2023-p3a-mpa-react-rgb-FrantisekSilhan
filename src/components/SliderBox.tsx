import { useContext } from "react";
import Slider from "./StyledSlider"
import { Context } from "../Providers/ContextProvider";
import Styles from "./sliderBox.module.css"

export const SliderBox = () => {
    const data = useContext(Context);

    console.log(data);

    return (
        <div>
            <Slider className={Styles["slider"]}
                min={0}
                max={255}
                value={data.color.R.toString()}
                onChange={(e) => {
                    let colorValue = parseInt(e.currentTarget.value);
                    console.log(colorValue);
                    data.changeColor({
                        R: colorValue, G: data.color.G, B: data.color.B
                    })
                }}
                backgroundColor={`rgb(${data.color.R}, ${data.color.G}, ${data.color.B})`}
                thumbColor={`rgb(${data.color.R}, 0, 0)`}
            />
            <Slider className={Styles["slider"]}
                min={0}
                max={255}
                value={data.color.G.toString()}
                onChange={(e) => {
                    let colorValue = parseInt(e.currentTarget.value);
                    console.log(colorValue);
                    data.changeColor({
                        R: data.color.R, G: colorValue, B: data.color.B
                    })
                }}
                backgroundColor={`rgb(${data.color.R}, ${data.color.G}, ${data.color.B})`}
                thumbColor={`rgb(0, ${data.color.G}, 0)`}
            />
            <Slider className={Styles["slider"]}
                min={0}
                max={255}
                value={data.color.B.toString()}
                onChange={(e) => {
                    let colorValue = parseInt(e.currentTarget.value);
                    console.log(colorValue);
                    data.changeColor({
                        R: data.color.R, G: data.color.G, B: colorValue
                    })
                }}
                backgroundColor={`rgb(${data.color.R}, ${data.color.G}, ${data.color.B})`}
                thumbColor={`rgb(0, 0, ${data.color.B})`}
            />
        </div>
    );
}

export default SliderBox;