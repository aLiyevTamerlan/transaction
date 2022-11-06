import React, {useState } from "react";
import axios from "axios";
import { Label, TextInput, Button } from "flowbite-react";
const Delete = () => {

  const [id, setId] = useState(0);
  const [msg, setMsg] = useState("");
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const deleteData = async (id) => {
    
    const res = await axios
      .delete(`${baseUrl}/${id}`).catch((err) => setMsg(err));
      if (res.status === 200) {
        setMsg("Successfuly prosess");
      }
    }
    
  return (
    <>
        <form className="get-submit grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-4xl mx-auto  ">
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
              <Button type="button" onClick={() => deleteData(id)} size="md">
                Execute
              </Button>
            </div>
        </form>
        <span className="text-blue-600/75">{msg}</span>
      </>
  );
}

export default Delete