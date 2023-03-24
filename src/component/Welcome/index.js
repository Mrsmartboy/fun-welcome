import { useState } from "react"

import { Container,Header,Description,Button} from "./styled"


const Welcome=()=>{
    const [subscribe,setSubscribe]=useState(true)

    const onClickButton=()=>{
        setSubscribe(prevState=>(!prevState))
    }

    const value=subscribe?"Subscribe":"Subscribed"

    return(
        <Container>
            <Header>Welcome</Header>
            <Description>Thank You! Happy Learning</Description>
            <Button onClick={onClickButton}>{value}</Button>
        </Container>
    )

}

export default Welcome