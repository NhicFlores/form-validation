import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import AuthHeader from './AuthHeader'
import BackButton from './BackButton'
//use wrapper components to organize common styles and layouts 

interface CardWrapperProps {
    header: string,
    label: string,
    backButtonHref: string,
    backButtonLabel: string,
    children: React.ReactNode,//children: every sub component in jsx in the parent component
}
//can use : to rename prop locally -> label: string, -> {label: title} can now use as title in component 
const CardWrapper = ({header, label, backButtonHref, backButtonLabel, children}: CardWrapperProps) => {
  return (
    <Card className='xl:w-1/4 md:w-1/2 shadow-md'>
        <CardHeader>
            <AuthHeader header={header} label={label}/>
        </CardHeader>
        <CardContent>
            {children}
        </CardContent>
        <CardFooter>
            <BackButton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>
    </Card>
  )
}

export default CardWrapper
