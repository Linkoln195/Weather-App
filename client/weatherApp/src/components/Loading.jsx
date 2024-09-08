import { Flex, Spin } from 'antd';
import classes from "./Loading.module.css"

const displayWidth = window.innerWidth;

const Loading = () => {

    return (
        <Flex align="center" gap="middle" className={classes.loadingBox}>
            {displayWidth > 450 ? <Spin size="large" /> : <Spin />}
        </Flex>
    )
}

export default Loading