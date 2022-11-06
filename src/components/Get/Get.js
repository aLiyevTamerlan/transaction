import "./get.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataItem from "./DataItem";
import { Label, TextInput, Button } from "flowbite-react";
export default function Get() {
  const [allData, setData] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const getData = async (from, to) => {
    let res;
    if (from && to) {
      res = await axios.get(`${baseUrl}?from=${from}&to=${to}`);
    } else if (from) {
      res = await axios.get(`${baseUrl}?from=${from}`);
    } else if (to) {
      res = await axios.get(`${baseUrl}?to=${to}`);
    } else {
      res = await axios.get(`${baseUrl}`);
    }
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <form className="get-submit grid grid-cols-1 lg:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
        <div className="w-full lg:max-w-xs">
          <div className="mb-2 block">
            <Label value="Form" />
          </div>
          <TextInput
            placeholder="From"
            type="text"
            name="from"
            onChange={(e) => setFrom(e.target.value.trim())}
            value={from}
          />
        </div>
        <div className="w-full lg:max-w-xs">
          <div className="mb-2 block">
            <Label value="To" />
          </div>
          <TextInput
            placeholder="to"
            type="text"
            name="to"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          />
        </div>
        <div className="flex justify-center items-end w-full lg:max-w-max">
          <Button type="button" onClick={() => getData(from, to)} size="md">
            Execute
          </Button>
        </div>
      </form>
      <ul  className=" mt-4 pr-4 pl-4 space-y-2">
        {allData ?
          allData.map((item) => {
            return <DataItem key={item.id} data={item} />;
          }): <div>Loading...</div>}
      </ul>
    </div>
  );
}
