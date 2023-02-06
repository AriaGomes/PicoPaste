
import Picker from '@emoji-mart/react'
import { useState } from "react";

export const EmojiPickerPopout = (props:any ) => {
    const [selectedEmoji, setSelectedEmoji] = useState<string>("");

    const HandleEmojiClick = (emojiObject:any) => {
        props.setText(props.text + emojiObject.native) 
    }

let theme = localStorage.getItem("theme");
    if(props.isDark)
    { theme="dark"}
    else theme="light"
return(
    <div className="absolute z-10 m-12">
        <Picker theme={theme} onEmojiSelect={HandleEmojiClick}></Picker>
    </div>
)
}

