import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className={'py-5 bg-dark'}>
                <div className="container">
                    <div className={'text-light d-flex flex-wrap justify-content-between'}>
                        <p>Copyright 2020. All rights reserved.</p>
                        <p> made by Doston Khamdamov</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;