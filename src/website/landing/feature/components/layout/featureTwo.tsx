import { useEffect, useRef } from "react"
import LayoutWrapper from "../base/wrapper/featureLayout"
import FeatureTwoContainer from "../container/featureTwoContainer"
import useScrollAnimate from "@/src/common/utils/hooks/scrollAnimate"

type featureTwo = {

}

const FeatureTwo = (props: featureTwo) => {
    const layout = useRef(null)
    const scrollAction = ():void => {
          document.getElementById("featureTwoContent")?.classList.add("animate-[staticEaseIn_1s_ease-in-out_forwards]")
          document.getElementById("featureTwoImage")?.classList.add("animate-[rightEaseIn_1s_ease-in-out_0.5s_forwards]")
    }
    useScrollAnimate(layout, scrollAction, true)
    
    
    return(
        <LayoutWrapper layoutRef={layout}>
            <FeatureTwoContainer/>
        </LayoutWrapper>
    )
}

export default FeatureTwo