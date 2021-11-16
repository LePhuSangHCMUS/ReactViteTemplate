//Lib
import React from "react";
import { Helmet } from "react-helmet";
import metaTagBuild from "./metaTagBuild";
import { IMeta } from "@Interfaces/meta"

interface IProps {
    meta:IMeta
}
const HelmetTag: React.FC<IProps> = ({ meta}) => {  
  return <Helmet>
   {metaTagBuild(meta)}
  </Helmet>;
};

export default HelmetTag;
