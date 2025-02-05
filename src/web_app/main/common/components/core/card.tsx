import { ReactNode } from "react"
import Card from "@/src/common/components/core/card"
import { classJoiner } from "@/src/common/utils/helper"
import { lato } from "@/src/common/utils/fonts"
import Skeleton from "react-loading-skeleton"

type card = {
    children: ReactNode,
    class?: string
}
type header = {
    title: string
    children?: React.ReactNode
    class?: string
    isLoading?: boolean
}
type body = {
    children: React.ReactNode
    class?:string
    isLoading?: boolean
    loadingClass?: string
}
export const CardHeader = (props: header) =>{
    return(
        <div className={classJoiner(props.class, "w-full flex flex-row items-start mb-4")}>
            {props.isLoading && <Skeleton className="flex-1" containerClassName="flex-1"/>}
            {!props.isLoading && <>
                <div className="w-full flex flex-row items-center"><p className={classJoiner(lato.className, "font-bold text-xl")}>{props.title}</p></div>
                {props.children && <div className="flex flex-row justify-end items-center w-full">{props.children}</div>}
            </>}   
        </div>
    )
}
export const CardBody = (props:body) =>{
    return(
        <div className={classJoiner(props.class, "w-full")}>
            {props.isLoading && <Skeleton className={props.loadingClass}/>}
            {!props.isLoading && <>
                {props.children}
            </>}
        </div>
    )
}
const DashboardCard = (props: card) =>{
    return(
        <Card width="inline-block sm:w-full" shadow="shadow" filled="bg-white" outline="border border-gray-300 border-solid" class={props.class}>
            {props.children}
        </Card>
    )
}

export default DashboardCard;