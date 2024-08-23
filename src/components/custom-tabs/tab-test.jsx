import React from "react";
import Tabs from "./tabs";

function RandomComponent(){
    return <h1>Some random content</h1>
}
export default function TabTest(){
    const tabs=[
        {
            label:'Tab 1',
            content:<div>this is content for Tab 1</div>
        },
        {
            label:'Tab 2',
            content:<div>this is content for Tab 2</div>
        },
        {
            label:'Tab 2',
            content:<RandomComponent/>
        }
    ]
    function handleChange(currentTabIndex){
        console.log(currentTabIndex)
    }

    return <Tabs tabsContent={tabs} onChnage={{handleChange}}/>
}