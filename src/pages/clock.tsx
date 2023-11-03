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
        <NumberLabel value={1} />
        <NumberLabel value={2} />
        <NumberLabel value={3} />
        <NumberLabel value={4} />
        <NumberLabel value={5} />
        <NumberLabel value={6} />
        <NumberLabel value={7} />
        <NumberLabel value={8} />
        <NumberLabel value={9} />
        <NumberLabel value={10} />
        <NumberLabel value={11} />
        <NumberLabel value={12} />
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
