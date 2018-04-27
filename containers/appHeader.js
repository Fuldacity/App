import React, { Component, Fragment } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { changeAppHeader } from '../actions/index'

class AppHeader extends Component {
    render() {
        console.log(this.props);
        return (
            <Fragment>
                <Text>{this.props.header}</Text>
                <Text onPress={this.props.changeAppHeader('hallo')}>click me</Text>
                </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        header: state.appHeader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeAppHeader: text => {
            dispatch(changeAppHeader(text))
        }
    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader)

export default ConnectedApp
