import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound =  ()=>{
    return(<div>
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={
                <Link to="/home">
                    <Button type="primary">Back to Home Page</Button>
                </Link>
            }
        />
    </div>)
}
export default NotFound;