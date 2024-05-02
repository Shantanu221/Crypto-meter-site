/* eslint-disable react/prop-types */
import { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./styles.css";
import Grid from "../Grid";
import List from "../List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  return (
    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid View" value="grid" sx={style} />
            <Tab label="List View" value="list" sx={style} />
          </TabList>
        </div>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((c, i) => {
              return <Grid coin={c} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((c, i) => {
              return <List coin={c} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
