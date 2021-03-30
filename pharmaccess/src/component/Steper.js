import React from "react";
import { useStep } from "react-hooks-helper";
import SelectPharm from '../component/SelectPharm';
import Help from './Help';
import  AllSet  from './AllSet';
import Subminssion from './Subminssion';
import PatientInfo from './PatientInfo';
import Form from './Form';
import Additional from './Additional';
const steps = [
  { id: "pharm", },
  { id: "help", },
  { id: "patient" },
  { id: "form" },
  { id: "additional" },
  { id: "allset" },
  { id: "sub" },
];
 const Stepp = () => {
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = {navigation};

  switch (step.id) {
    case "pharm":
      return <SelectPharm {...props} />;
    case "help":
      return <Help {...props} />;
    case "patient":
      return <PatientInfo {...props} />;
    case "form":
      return <Form {...props}/>;
    case "additional":
      return <Additional {...props}/>
    case "allset":
        return <AllSet {...props}/>;
    case "sub":
        return <Subminssion {...props}/>    
         
  }

  return (
    <div>
     
    </div>
  );
};
export default Stepp;