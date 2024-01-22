import { useContext } from "react";
import Slider from "./StyledSlider"
import { Context } from "../Providers/ContextProvider";
import { actionType, colorChannel } from "../Providers/ReducerEnums";
import Styles from "./sliderBox.module.css"

export const SliderBox = () => {
    const [data, dispatch] = useContext(Context);

    console.log(data);

    return (
        <div>
            <Slider className={Styles["slider"]}
                min={0}
                max={255}
                value={data.color.R.toString()}
                onChange={(e) => {
                    const colorValue = parseInt(e.currentTarget.value);
                    dispatch({
                        type: actionType.CHANGE_COLOR,
                        value: colorValue,
                        part: colorChannel.R
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
                    const colorValue = parseInt(e.currentTarget.value);
                    dispatch({
                        type: actionType.CHANGE_COLOR,
                        value: colorValue,
                        part: colorChannel.G
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
                    const colorValue = parseInt(e.currentTarget.value);
                    dispatch({
                        type: actionType.CHANGE_COLOR,
                        value: colorValue,
                        part: colorChannel.B
                    })
                }}
                backgroundColor={`rgb(${data.color.R}, ${data.color.G}, ${data.color.B})`}
                thumbColor={`rgb(0, 0, ${data.color.B})`}
            />
        </div>
    );
}

export default SliderBox;