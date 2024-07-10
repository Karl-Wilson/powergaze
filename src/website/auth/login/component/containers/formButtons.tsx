import Button from "@/src/common/components/core/button"
import { classJoiner } from "@/src/common/utils/helper"
import Link from "next/link"

type formButtons = {
    class?: string
    createAccount?: React.MouseEventHandler
    submitAccount?: React.MouseEventHandler
}

const FormButtons = (props: formButtons) =>{
    return(
        <div className={classJoiner("flex flex-row items-center justify-between w-full", props.class)}>
            <Link href="/signup" className="font-bold">Create Account</Link>
            <Button label="Next" 
                filled={{bgColor: "bg-btnColor hover:bg-btnColor-dark", textColor: "text-white"}} 
                class="font-bold w-full md:w-auto" click={props.submitAccount}/>
        </div>
    )
}

export default FormButtons