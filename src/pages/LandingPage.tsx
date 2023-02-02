import { DefaultButton, TextArea } from "../components"

export const LandingPage = () => {
    return(
        <><div>
            <center> <p className="dark:text-white">PicoPaste</p></center>
           
        </div><div className="p-4 pt-20">
                <TextArea />
                <DefaultButton> Submit Paste</DefaultButton>
            </div></>
    )
}