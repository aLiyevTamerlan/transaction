import React, {  useState } from "react";
import axios from "axios";
import { Label, TextInput, Button } from "flowbite-react";
export default function Put() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");
  const [amount, setAmount] = useState(0);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const putData = async (from, to, amount, id) => {
    if(from && to && amount && id && amount !==0){
      const res = await axios
        .put(`${baseUrl}/${id}`, {
          from: from,
          to: to,
          amount: amount,
        })
        .catch((err) => setMsg(err));
        if (res.status === 201) {
          setMsg("Successfuly prosess");
        }
      }
      else{
          setMsg("Validated error");
        }
    }
    
  return (
    <>
        <form className="get-submit grid grid-cols-1 lg:grid-cols-5 gap-4 w-full max-w-4xl mx-auto  ">
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
            <div className="w-full lg:max-w-xs">
              <div className="mb-2 block">
                <Label value="Amount" />
              </div>
              <TextInput
                placeholder="amount"
                type="number"
                name="amount"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
              />
            </div>
            <div className="w-full lg:max-w-xs">
              <div className="mb-2 block">
                <Label value="Id" />
              </div>
              <TextInput
                placeholder="id"
                type="number"
                name="id"
                onChange={(e) => setId(e.target.value)}
                value={id}
              />
            </div>
            <div className="flex justify-center items-end w-full lg:max-w-max">
              <Button type="button" onClick={() => putData(from, to,amount,id)} size="md">
                Execute
              </Button>
            </div>
        </form>
        <span className="text-blue-600/75">{msg}</span>
      </>
  );
}
