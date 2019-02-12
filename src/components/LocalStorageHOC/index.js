import React, {Component, Fragment} from 'react';

const LocalStorageHOC = (WrappedComponent, menus) => {
    class LocalStorage extends Component {
    state = {
        menus: menus,
    };

    render () {
        const items = menus.map (item => <li key={item.name}>{item.name}</li>);
        return (
            <Fragment>
                <ul>
                    {items}
                </ul>
                <WrappedComponent {...this.props} {...this.state} />
            </Fragment>
        );
    }
    }

    return LocalStorage;
};

export default LocalStorageHOC;
