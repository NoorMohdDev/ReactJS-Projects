import { useContext } from "react";
import { FeatureFlagContext } from "./context/index.jsx"
import LightDarkMode from "../Light-Dark-Mode/LightDarkMode.jsx";
import TicTacToe from "../Tic-Tac-Toe/TicTacToe.jsx";
import RandomColorGenerator from "../Random-Color-Generator/RandomColorGenerator.jsx";
import Accordian from "../Accordian/Accordian.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import CustomTabs from "../Custom-Tabs/CustomTabs.jsx";

export default function FeatureFlag() {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColorGenerator />,
    },
    {
      key: "showAccordian",
      component: <Accordian/>,
    },
    {
      key: "showTreeView",
      component: <Dropdown/>,
    },
    {
        key : 'showTabs',
        component : <CustomTabs/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}