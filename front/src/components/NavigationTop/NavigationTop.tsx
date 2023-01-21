import classNames from "classnames";
import TopMenu from "../../config/TopMenu";

const NavigationTop = ({ className }: { className: string }) => {
  console.log(TopMenu);
  return (
    <div className={classNames("absolute right-5 flex flex-row ", className)}>
      {TopMenu.map((item, i) => (
        <div key={i} className="px-2">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default NavigationTop;
