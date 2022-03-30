import classnames from "classnames";
import * as _ from "lodash";
import "./styles.less";

const StepInfo: Record<string, any>[] = [
  { title: "title1", status: "finish" },
  { title: "title2", status: "finish" },
  { title: "title3", status: "finish" },
  { title: "title4", status: "process" },
  { title: "title5", status: "process" },
  { title: "title6", status: "process" },
  { title: "title7", status: "wait" },
  { title: "title8", status: "wait" },
  { title: "title9", status: "wait" },
  { title: "title10", status: "wait" },
  { title: "title11", status: "wait" },
  { title: "title12", status: "wait" }
];

const SnakeSteps = () => {
  return (
    <div className="serpentine-steps">
      {_.chunk(StepInfo, 5).map((array, index) => (
        <div className="step-row" key={index}>
          {array.map((item: any, i: number) => (
            <div
              className={classnames({
                "step-row-item": true,
                "corner-right": i === 4 && index % 2 === 0,
                "corner-left": i === 4 && index % 2 === 1,
                "line-right": i !== 4 && index % 2 === 0,
                "line-left": i !== 4 && index % 2 === 1,
                "row-reverse": index % 2 === 1,
                "real-last-item":
                  index === _.chunk(StepInfo, 5).length - 1 &&
                  i === array.length - 1,
                [`step-row-item-${item.status}`]: !!item.status
              })}
              key={i}
              style={{
                gridRowStart: "1",
                gridColumnStart: index % 2 === 1 ? `${5 - i}` : "auto"
              }}
            >
              <div className={`node`}>{index * 5 + i + 1}</div>
              <div className="step-row-item-info-wrap">
                <div className="title">{item.title}</div>
                <div className="box">content</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SnakeSteps;
