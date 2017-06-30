import React, { Component } from 'react'
import { View, Link } from 'react-native'
import { Redirect } from 'react-router-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'

export default class Login extends Component {
    render() {
        return (
            <View>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log(result.error)
                                alert("Connexion échouée.")
                            } else if (result.isCancelled) {
                                alert("Connexion annulée.")
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString());
                                        alert("Vous êtes connecté.")
                                        return (
                                            <Redirect to="/map" />
                                        )
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => {
                        alert("Vous êtes déconnecté.")
                        return (
                            <Redirect to="/home" />
                        )
                    }}/>
            </View>
        )
    }
}
