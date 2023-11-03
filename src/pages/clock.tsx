import { Tooltip } from "react-tooltip";
import { useInterval } from "react-interval-hook";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { updateTime } from "../redux/slices/clock";
import ClockBoard from "../components/ClockBoard";
import NumberLabel from "../components/NumberLabel";
import { Hand } from "../components/Hand";

export default function Clock() {
  const clockState = useSelector((state: AppState) => state.clock);
  const dispatch: AppDispatch = useDispatch();
  useInterval(
    () => {
      dispatch(updateTime());
    },
    1000,
    {
      autoStart: true,
      immediate: true,
      selfCorrecting: true,
      onFinish: () => {
        console.log("When timmer is stopped...");
      },
    }
  );

  return (
    <>
      <ClockBoard>
        <Hand className="hour" rotation={clockState.hoursAng}></Hand>
        <Hand className="minute" rotation={clockState.minutesAng}></Hand>
        <Hand className="second" rotation={clockState.secondsAng}></Hand>
        {Array(12)
          .fill("")
          .map((_, index) => (
            <NumberLabel value={index + 1} />
          ))}
      </ClockBoard>
      <Tooltip
        id="my-tooltip"
        place="top-start"
        float
        content={`${clockState.hours}:${clockState.minutes}:${clockState.seconds} ${clockState.ap}`}
        style={{ fontSize: "16px", zIndex: 1000 }}
      />
    </>
  );
}
