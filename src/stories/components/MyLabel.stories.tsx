import MyLabel from "../../components/MyLabel";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes:{
        size: { control: 'select',},
        color:{ control: 'select'},
        fontColor: { control: 'color' },
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args)=> <MyLabel {...args}/>


export const Basic = Template.bind({});
Basic.args= {
    size: 'normal',
    allCaps: false  // true: Capitalizar la palabra
}
export const AllCaps = Template.bind({});
AllCaps.args={
    size:'normal',
    allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args={
    size:'normal',
    color: 'secondary' // primary , secondary , terciary
}

export const Tertriary = Template.bind({});
Tertriary.args={
    size:'normal',
    color: 'tertriary'
}


export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args={
    size:'h1',
    fontColor: "#eeeeee",
    backgroundColor: "#000000"
}
