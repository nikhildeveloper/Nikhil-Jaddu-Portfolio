import React from 'react'
import { AnimatedTooltip } from '../ui/AnimatedToolTip';
import { NodeJsLogo} from '../Logos/NodeJsLogo.jsx'
import {MongoDbLogo} from '../Logos/MongoDBLogo.jsx';
// import NodejsImage from '../../assets/';
function SkillsDisplay() {
    const skills = [
        {
          id: 1,
          name: "Node.js",
          designation: "Backend",
          icon: <NodeJsLogo className="h-12 w-12"/>, // Path to Node.js logo
        },
        {
          id: 2,
          name: "MongoDB",
          designation: "Backend",
          icon: <MongoDbLogo className="h-12 w-12"/>, // Path to Node.js logo
        },

      ];


  return (
    <div>
        <AnimatedTooltip items={skills}/>
    </div>
  )
}

export default SkillsDisplay