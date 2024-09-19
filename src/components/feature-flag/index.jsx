import React from "react"
import LightDarkMode from "../light-dark-mode/inde"
import TicTacToe from "../tic-tact-toe"
import RandomColor from "../random-color"
import Accordian from "../accordian"
import TreeView from "../tree-view"


export default function FeatureFlags(){
    

const componentsToRender=[
    {key:'LightDarkMOde',
    component:<LightDarkMode/>
    },
    {key:'showTicTacToe',
        component:<TicTacToe/>
    },
    {key:'showRandomColorGenerator',
        component:<RandomColor/>
    },
    {key:'showAccordian',
        component:<Accordian/>
    },
    {key:'showTreeView',
        component:<TreeView/>
}]


    return (
        <div><h1>feature flags</h1></div>
    )
}

